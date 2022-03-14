import type { BooleanSchema } from "../schema";
import { BooleanValidationError } from "../errors";
import { Validator } from "./validator.interface";

export const BooleanValidator: Validator<BooleanSchema> = {
  validate: (data) => {
    if (typeof data !== "boolean") {
      throw new BooleanValidationError({ item: data, message: `Type of the value is not 'number'` });
    }
    return true;
  },
};
