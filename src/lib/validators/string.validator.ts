import type { StringSchema } from "../schema";
import { StringValidationError } from "../errors";
import { Validator } from "./validator.interface";

export const StringValidator: Validator<StringSchema> = {
  validate: (data, schema) => {
    if (typeof data !== "string") {
      throw new StringValidationError({ item: data, message: `Type of the value is not 'string'` });
    }
    /*
      TODO: What to return if an enum is an empty array - should we allow all of the values or none of them?
    */
    if (schema?.enum && !schema?.enum?.includes(data)) {
      throw new StringValidationError({ item: data, message: `Value is not found in defined enum` });
    }

    return true;
  },
};
