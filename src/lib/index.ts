import type { ArraySchema, ObjectSchema, SCHEMA, StringSchema } from "./schema";
import { ArrayValidator, BooleanValidator, NumberValidator, ObjectValidator, StringValidator } from "./validators";

export const validateSchema = (data: any, schema?: SCHEMA): boolean | never => {
  switch (schema?.type) {
    case "number": {
      NumberValidator.validate(data);
      break;
    }
    case "boolean": {
      BooleanValidator.validate(data);
      break;
    }
    case "string": {
      StringValidator.validate(data, schema as StringSchema);
      break;
    }
    case "array": {
      ArrayValidator.validate(data, schema as ArraySchema);
      break;
    }
    case "object": {
      ObjectValidator.validate(data, schema as ObjectSchema);
      break;
    }
    default: {
      throw new Error("Illegal type of schema");
    }
  }
  return true;
};
