import type { NumberSchema } from "../schema";
import { Validator } from "./validator.interface";

export const NumberValidator: Validator<NumberSchema> = {
  validate: (data, schema) => {
    return true;
  },
};
