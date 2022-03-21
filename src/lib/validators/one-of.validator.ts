import { validateSchema } from "..";
import { OneOfValidationError } from "../errors";
import { OneOfSchema } from "../schema";
import { Validator } from "./validator.interface";

export const OneOfValidator: Validator<OneOfSchema> = {
  validate: (data: any, schema: OneOfSchema) => {
    let validationErrors = [];
    for (const possibleSchema of schema.schemas) {
      try {
        validateSchema(data, possibleSchema);
      } catch (error) {
        validationErrors.push({ item: data, message: (error as Error).message });
      }
    }
    if (validationErrors.length === schema.schemas.length) {
      throw new OneOfValidationError("One of validation failed", validationErrors);
    }
    return true;
  },
};
