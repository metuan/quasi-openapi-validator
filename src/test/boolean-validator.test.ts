import { BooleanValidationError } from "../lib/errors";
import { BooleanSchema } from "../lib/schema";
import { BooleanValidator } from "../lib/validators";

describe("Boolean validator", () => {
  const schema: BooleanSchema = {
    type: "boolean",
  };

  describe("Valid", () => {
    test("Simple true", () => {
      const data = true;

      expect(BooleanValidator.validate(data, schema)).toBe(true);
    });

    test("Simple false", () => {
      const data = false;

      expect(BooleanValidator.validate(data, schema)).toBe(true);
    });

    test("Boolean expression", () => {
      const data = !!10;

      expect(BooleanValidator.validate(data, schema)).toBe(true);
    });
  });

  describe("Invalid", () => {
    test("String", () => {
      const data = "h1";

      expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
    });

    test("Number", () => {
      const data = 10;

      expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
    });

    test("Symbol", () => {
      const data = Symbol("h1");

      expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
    });

    test("Array", () => {
      const data = ["aaa", "aaa"];

      expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
    });

    test("Object", () => {
      const data = { property: "h1" };

      expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
    });
  });
});
