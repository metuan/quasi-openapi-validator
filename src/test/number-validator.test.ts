import { NumberValidationError } from "../lib/errors";
import { NumberSchema } from "../lib/schema";
import { NumberValidator } from "../lib/validators";

describe("Number validator", () => {
  const schema: NumberSchema = {
    type: "number",
  };

  describe("Valid", () => {
    test("Simple number", () => {
      const data = 1337;

      expect(NumberValidator.validate(data, schema)).toBe(true);
    });

    test("Zero", () => {
      const data = 0;

      expect(NumberValidator.validate(data, schema)).toBe(true);
    });

    test("Inifnity", () => {
      const data = Infinity;

      expect(NumberValidator.validate(data, schema)).toBe(true);
    });

    test("NaN", () => {
      const data = NaN;

      expect(NumberValidator.validate(data, schema)).toBe(true);
    });

    test("Pi", () => {
      const data = Math.PI;

      expect(NumberValidator.validate(data, schema)).toBe(true);
    });

    test("Number constructor (without new)", () => {
      const data = Number(10);

      expect(NumberValidator.validate(data, schema)).toBe(true);
    });
  });

  describe("Invalid", () => {
    test("bigint", () => {
      const data = BigInt(1233);

      expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
    });

    test("string", () => {
      const data = "h1";

      expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
    });

    test("boolean", () => {
      const data = false;

      expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
    });

    test("array", () => {
      const data = [1, 2, 34];

      expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
    });

    test("object", () => {
      const data = { property: "h2" };

      expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
    });

    test("Number constructor (with new)", () => {
      const data = new Number(10);

      expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
    });
  });
});
