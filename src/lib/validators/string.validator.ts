import type { StringSchema } from "../schema";
import { Validator } from "./validator.interface";

export const StringValidator: Validator<StringSchema> = {
  validate: (data, schema) => {
    return true;
  },
};
