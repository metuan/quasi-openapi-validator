import type { BooleanSchema } from "../schema";
import { Validator } from "./validator.interface";

export const BooleanValidator: Validator<BooleanSchema> = {
  validate: (data, schema) => {
    return true;
  },
};
