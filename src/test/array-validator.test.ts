import { ArrayValidationError } from "../lib/errors";
import { ArraySchema } from "../lib/schema";
import { ArrayValidator } from "../lib/validators";

describe("Array validator", () => {
  test("Should validate array of strings", () => {
    const arraySchemaWithStrings: ArraySchema = {
      type: "array",
      items: { type: "string" },
    };
    const data = ["h1", "h2", "h3"];

    expect(ArrayValidator.validate(data, arraySchemaWithStrings)).toBe(true);
  });

  test("Should validate array of numbers", () => {
    const arraySchemaWithNumbers: ArraySchema = {
      type: "array",
      items: { type: "number" },
    };
    const data = [1, 2, 3];

    expect(ArrayValidator.validate(data, arraySchemaWithNumbers)).toBe(true);
  });

  test("Should validate array of booleans", () => {
    const arraySchemaWithBoolean: ArraySchema = {
      type: "array",
      items: { type: "boolean" },
    };
    const data = [true, false, true];

    expect(ArrayValidator.validate(data, arraySchemaWithBoolean)).toBe(true);
  });

  test("Should validate empty array", () => {
    const emptyArrayWithString: ArraySchema = {
      type: "array",
      items: { type: "string" },
    };
    const data: any = [];

    expect(ArrayValidator.validate(data, emptyArrayWithString)).toBe(true);
  });

  test("Should validate nested arrays", () => {
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

  test("Should validate array of objects", () => {
    const arrayOfObjectsSchema: ArraySchema = {
      type: "array",
      items: { type: "object", properties: { name: { type: "string" } }, required: ["name"] },
    };
    const data: any = [
      {
        name: "H1",
      },
      {
        name: "H2",
      },
    ];

    expect(ArrayValidator.validate(data, arrayOfObjectsSchema)).toBe(true);
  });

  test("Should throw error when data does not match the schema items", () => {
    const arraySchema: ArraySchema = {
      type: "array",
      items: { type: "string" },
    };
    const data = { name: "h1" };

    expect(() => ArrayValidator.validate(data, arraySchema)).toThrow(ArrayValidationError);
  });

  test("Should throw an error when item in array does not match defined item type", () => {
    const arraySchema: ArraySchema = {
      type: "array",
      items: { type: "string" },
    };
    const data = ["h1", "h2", "h3", 4, 5, "h6"];

    expect(() => ArrayValidator.validate(data, arraySchema)).toThrow(ArrayValidationError);
  });
});
