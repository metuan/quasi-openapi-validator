import type { StringSchema } from "../lib/schema";
import { StringValidationError } from "../lib/errors";
import { StringValidator } from "../lib/validators";

describe("String validator", () => {
  const schema: StringSchema = {
    type: "string",
  };

  test("Should validate random string", () => {
    const data = new Date().toISOString();

    expect(StringValidator.validate(data, schema)).toBe(true);
  });

  test("Should validate empty string", () => {
    const data = "";

    expect(StringValidator.validate(data, schema)).toBe(true);
  });

  test("Should throw an error when type mismtach - boolean", () => {
    const data = false;

    expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
  });

  test("Should throw an error when type mismtach - number", () => {
    const data = 10;

    expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
  });

  test("Should throw an error when type mismtach - symbol", () => {
    const data = Symbol("h1");

    expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
  });

  test("Should throw an error when type mismtach - array", () => {
    const data = ["aaa", "aaa"];

    expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
  });

  test("Should throw an error when type mismtach - object", () => {
    const data = { property: "h1" };

    expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
  });
});

describe("String with enum", () => {
  let schemaWithEnum: StringSchema = {
    type: "string",
    enum: ["h1", "h2", "h3", "h4"],
  };

  let schemaWithEmptyEnum: StringSchema = {
    type: "string",
    enum: [],
  };

  test("Should validate enum", () => {
    const data1 = "h1";
    const data2 = "h2";
    const data3 = "h3";
    const data4 = "h4";

    expect(StringValidator.validate(data1, schemaWithEnum)).toBe(true);
    expect(StringValidator.validate(data2, schemaWithEnum)).toBe(true);
    expect(StringValidator.validate(data3, schemaWithEnum)).toBe(true);
    expect(StringValidator.validate(data4, schemaWithEnum)).toBe(true);
  });

  test("Should throw an error when enum is empty in schema - do not allow any string", () => {
    const randomString = new Date().toISOString();
    const emptyString = "";

    expect(() => StringValidator.validate(randomString, schemaWithEmptyEnum)).toThrow(StringValidationError);
    expect(() => StringValidator.validate(emptyString, schemaWithEmptyEnum)).toThrow(StringValidationError);
  });

  test("Should throw an error when value is not defined in enum", () => {
    const data = "h100";

    expect(() => StringValidator.validate(data, schemaWithEnum)).toThrow(StringValidationError);
  });
});
