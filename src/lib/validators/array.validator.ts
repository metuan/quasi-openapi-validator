import type { ArraySchema } from "../schema";
import { validateSchema } from "..";
import { ArrayValidationError } from "../errors";
import { Validator } from "./validator.interface";

/*
  TODO:What do to with empty array?
*/
export const ArrayValidator: Validator<ArraySchema> = {
  validate: (data: any, schema) => {
    /*
      Can not simply check the typeof as in other validators,
      typeof T[] will be 'object'.
    */
    if (!Array.isArray(data)) {
      throw new ArrayValidationError(`Type of the value is not an array`);
    }

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
