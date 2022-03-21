import type { NumberSchema } from "../lib/schema";
import { NumberValidationError } from "../lib/errors";
import { NumberValidator } from "../lib/validators";

describe("Number validator", () => {
  const schema: NumberSchema = {
    type: "number",
  };

  test("Should validate random number", () => {
    const data = Math.floor(Math.random() * 100000);

    expect(NumberValidator.validate(data, schema)).toBe(true);
  });

  test("Should validate zero", () => {
    const data = 0;

    expect(NumberValidator.validate(data, schema)).toBe(true);
  });

  test("Should validate global property - Infnity", () => {
    const data = Infinity;

    expect(NumberValidator.validate(data, schema)).toBe(true);
  });

  test("Should validate global property - NaN", () => {
    const data = NaN;

    expect(NumberValidator.validate(data, schema)).toBe(true);
  });

  test("Should validate property from Math module - Pi", () => {
    const data = Math.PI;

    expect(NumberValidator.validate(data, schema)).toBe(true);
  });

  test("Should validate Number constructor - casting", () => {
    const data = Number(10);

    expect(NumberValidator.validate(data, schema)).toBe(true);
  });

  test("Should validate number casting number from string", () => {
    const data = +"10";

    expect(NumberValidator.validate(data, schema)).toBe(true);
  });

  test("Should throw an error when type mismtach - bigint", () => {
    const data = BigInt(1233);

    expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
  });

  test("Should throw an error when type mismtach - string", () => {
    const data = "h1";

    expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
  });

  test("Should throw an error when type mismtach - boolean", () => {
    const data = false;

    expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
  });

  test("Should throw an error when type mismtach - number[]", () => {
    const data = [1, 2, 34];

    expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
  });

  test("Should throw an error when type mismtach - object", () => {
    const data = { property: 2 };

    expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
  });

  test("Should throw an error when type mismtach - new Number(...)", () => {
    const data = new Number(10);

    expect(() => NumberValidator.validate(data, schema)).toThrow(NumberValidationError);
  });
});
