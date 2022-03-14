import { NumberValidationError } from "../errors";
import type { NumberSchema } from "../schema";
import { Validator } from "./validator.interface";

export const NumberValidator: Validator<NumberSchema> = {
  validate: (data) => {
    /*
      TODO: What to do with NaN, Inifnity, etc? These are properties of type 'number'. 
      TODO: What to do with new Number(...). These are properties of type 'object'.
      TODO: What to do with bigint?
    */
    if (typeof data !== "number") {
      throw new NumberValidationError({ item: data, message: `Type of the value is not 'number'` });
    }

    return true;
  },
};
