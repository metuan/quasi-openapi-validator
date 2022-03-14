import { SCHEMA } from "./schema";

export const validateSchema = (data: any, schema: SCHEMA): boolean | never => {
  throw new Error("Schema is not valid");
};
