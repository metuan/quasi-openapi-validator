import type { ObjectSchema } from "../schema";
import { Validator } from "./validator.interface";

export const ObjectValidator: Validator<ObjectSchema> = {
  validate: (data, schema) => {
    return true;
  },
};
