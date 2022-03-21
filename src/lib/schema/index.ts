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

type OneOfSchema = {
  type: "oneOf";
  schemas: SCHEMA[];
};

type ObjectSchema = {
  type: "object";
  properties: Record<string, SCHEMA>;
  required?: string[];
};

type SCHEMA = StringSchema | NumberSchema | BooleanSchema | ObjectSchema | ArraySchema | OneOfSchema;

export type { SCHEMA, StringSchema, NumberSchema, BooleanSchema, ObjectSchema, ArraySchema, OneOfSchema };
