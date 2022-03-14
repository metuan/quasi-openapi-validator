type StringSchema = {
  type: "string";
  enum?: string[];
};

type NumberSchema = {
  type: "number";
};

type BooleanSchema = {
  type: "boolean";
};

type ArraySchema = {
  type: "array";
  items: SCHEMA;
};

type ObjectSchema = {
  type: "object";
  properties: Record<string, SCHEMA>;
  required?: string[];
};

type SCHEMA = StringSchema | NumberSchema | BooleanSchema | ObjectSchema | ArraySchema;

export type { SCHEMA, StringSchema, NumberSchema, BooleanSchema, ObjectSchema, ArraySchema };
