import type { SCHEMA } from "../schema";

export interface Validator<T extends SCHEMA> {
  validate(data: any, schema?: T): boolean | never;
}
