import type { OneOfSchema } from "../lib/schema";
import { OneOfValidationError } from "../lib/errors";
import { OneOfValidator } from "../lib/validators";

describe("One of validator", () => {
  const schema: OneOfSchema = {
    type: "oneOf",
    schemas: [{ type: "string" }, { type: "boolean" }, { type: "array", items: { type: "number" } }],
  };

  test("Should validate one of schema", () => {
    const data1 = false;
    const data2 = "abc";
    const data3 = [1, 2, 3, 4, 5];

    expect(OneOfValidator.validate(data1, schema)).toBe(true);
    expect(OneOfValidator.validate(data2, schema)).toBe(true);
    expect(OneOfValidator.validate(data3, schema)).toBe(true);
  });

  test("Should throw an error when schema mismatch", () => {
    const data = 12;

    expect(() => OneOfValidator.validate(data, schema)).toThrow(OneOfValidationError);
  });

  test("Should throw an error when null passed", () => {
    const data = null;

    expect(() => OneOfValidator.validate(data, schema)).toThrow(OneOfValidationError);
  });
});
