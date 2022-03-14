import { ArrayValidationError } from "../lib/errors";
import { ArraySchema } from "../lib/schema";
import { ArrayValidator } from "../lib/validators";

describe("Array validator", () => {
  describe("Valid", () => {
    test("String array", () => {
      const arraySchemaWithStrings: ArraySchema = {
        type: "array",
        items: { type: "string" },
      };
      const data = ["h1", "h2", "h3"];

      expect(ArrayValidator.validate(data, arraySchemaWithStrings)).toBe(true);
    });

    test("Number array", () => {
      const arraySchemaWithNumbers: ArraySchema = {
        type: "array",
        items: { type: "number" },
      };
      const data = [1, 2, 3];

      expect(ArrayValidator.validate(data, arraySchemaWithNumbers)).toBe(true);
    });

    test("Boolean array", () => {
      const arraySchemaWithBoolean: ArraySchema = {
        type: "array",
        items: { type: "boolean" },
      };
      const data = [true, false, true];

      expect(ArrayValidator.validate(data, arraySchemaWithBoolean)).toBe(true);
    });

    test("Empty array", () => {
      const emptyArrayWithString: ArraySchema = {
        type: "array",
        items: { type: "string" },
      };
      const data: any = [];

      expect(ArrayValidator.validate(data, emptyArrayWithString)).toBe(true);
    });

    test("Array of arrays", () => {
      const emptyArrayWithString: ArraySchema = {
        type: "array",
        items: { type: "array", items: { type: "number" } },
      };
      const data: any = [
        [1, 2, 3],
        [1, 2, 3],
      ];

      expect(ArrayValidator.validate(data, emptyArrayWithString)).toBe(true);
    });

    test("Array of objects", () => {
      const emptyArrayWithString: ArraySchema = {
        type: "array",
        items: { type: "object", properties: { name: { type: "string" } } },
      };
      const data: any = [
        {
          name: "H1",
        },
        {
          name: "H2",
        },
      ];

      expect(ArrayValidator.validate(data, emptyArrayWithString)).toBe(true);
    });
  });

  describe("Invalid", () => {
    test("Array Type", () => {
      const arraySchema: ArraySchema = {
        type: "array",
        items: { type: "string" },
      };
      const data = { name: "h1" };

      expect(() => ArrayValidator.validate(data, arraySchema)).toThrow(ArrayValidationError);
    });

    test("Type of items", () => {
      const arraySchema: ArraySchema = {
        type: "array",
        items: { type: "string" },
      };
      const data = ["h1", "h2", "h3", 4, 5, "h6"];

      expect(() => ArrayValidator.validate(data, arraySchema)).toThrow(ArrayValidationError);
    });
  });
});
