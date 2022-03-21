import type { BooleanSchema } from "../lib/schema";
import { BooleanValidationError } from "../lib/errors";
import { BooleanValidator } from "../lib/validators";

describe("Boolean validator", () => {
  const schema: BooleanSchema = {
    type: "boolean",
  };

  test("Should validate true and false", () => {
    const truthy = true;
    const falsy = false;

    expect(BooleanValidator.validate(truthy, schema)).toBe(true);
    expect(BooleanValidator.validate(falsy, schema)).toBe(true);
  });

  test("Should validate boolean expression", () => {
    const data = !!10;

    expect(BooleanValidator.validate(data, schema)).toBe(true);
  });
  test("Should throw an error when type mismtach - string", () => {
    const data = "h1";

    expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
  });

  test("Should throw an error when type mismtach - number", () => {
    const data = 10;

    expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
  });

  test("Should throw an error when type mismtach - symbol", () => {
    const data = Symbol("h1");

    expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
  });

  test("Should throw an error when type mismtach - array", () => {
    const data = ["aaa", "aaa"];

    expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
  });

  test("Should throw an error when type mismtach - object", () => {
    const data = { property: "h1" };

    expect(() => BooleanValidator.validate(data, schema)).toThrowError(BooleanValidationError);
  });
});
