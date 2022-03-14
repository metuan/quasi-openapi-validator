import { validateSchema } from "..";
import { ArrayValidationError } from "../errors";
import type { ArraySchema } from "../schema";
import { BooleanValidator } from "./boolean.validator";
import { NumberValidator } from "./number.validator";
import { ObjectValidator } from "./object.validator";
import { StringValidator } from "./string.validator";
import { Validator } from "./validator.interface";

export const ArrayValidator: Validator<ArraySchema> = {
  validate: (data: any, schema) => {
    /*
      Can not simply check the typeof as in other validators,
      typeof T[] will be 'object' in JS runtime.
    */
    if (!Array.isArray(data)) {
      throw new ArrayValidationError(`Type of the value is not an array`);
    }

    /*
      TODO:What do to with empty array?
    */

    let validationErrors = [];
    for (let item of data) {
      try {
        validateSchema(item, schema?.items);
      } catch (error) {
        validationErrors.push({ item, message: (error as Error).message });
      }
    }
    if (validationErrors?.length) {
      throw new ArrayValidationError("Array validation failed", validationErrors);
    }
    return true;
  },
};
