import type { ArraySchema } from "../schema";
import { Validator } from "./validator.interface";

export const ArrayValidator: Validator<ArraySchema> = {
  validate: (data, schema) => {
    return true;
  },
};
