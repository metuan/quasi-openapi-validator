import type { StringSchema } from "../lib/schema";
import { StringValidationError } from "../lib/errors";
import { StringValidator } from "../lib/validators";

describe("String validator", () => {
  const schema: StringSchema = {
    type: "string",
  };

  describe("Valid", () => {
    test("Simple string", () => {
      const data = "h1, h2";

      expect(StringValidator.validate(data, schema)).toBe(true);
    });

    test("Empty string", () => {
      const data = "";

      expect(StringValidator.validate(data, schema)).toBe(true);
    });
  });

  describe("Invalid", () => {
    test("Boolean", () => {
      const data = false;

      expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
    });

    test("Number", () => {
      const data = 10;

      expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
    });

    test("Symbol", () => {
      const data = Symbol("h1");

      expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
    });

    test("Array", () => {
      const data = ["aaa", "aaa"];

      expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
    });

    test("Object", () => {
      const data = { property: "h1" };

      expect(() => StringValidator.validate(data, schema)).toThrowError(StringValidationError);
    });
  });
});

describe("String validator with enum", () => {
  let schemaWithEnum: StringSchema = {
    type: "string",
    enum: ["h1", "h2", "h3", "h4"],
  };

  let schemaWithEmptyEnum: StringSchema = {
    type: "string",
    enum: [],
  };

  describe("Valid", () => {
    test("Enum", () => {
      const data = "h1";

      expect(StringValidator.validate(data, schemaWithEnum)).toBe(true);
    });
  });

  describe("Invalid", () => {
    test("Empty enum", () => {
      const data = "h1";

      expect(() => StringValidator.validate(data, schemaWithEmptyEnum)).toThrow(StringValidationError);
    });

    test("Invalid value form Enum", () => {
      const data = "h100";

      expect(() => StringValidator.validate(data, schemaWithEnum)).toThrow(StringValidationError);
    });
  });
});
