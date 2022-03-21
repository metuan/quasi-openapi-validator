import type { ArraySchema, BooleanSchema, NumberSchema, ObjectSchema, StringSchema } from "../lib/schema";
import { validateSchema } from "../lib";
import { ArrayValidator, BooleanValidator, NumberValidator, ObjectValidator, StringValidator } from "../lib/validators";

describe("Quasi OPEN API Validator", () => {
  beforeAll(() => {
    StringValidator.validate = jest.fn(() => true);
    NumberValidator.validate = jest.fn(() => true);
    BooleanValidator.validate = jest.fn(() => true);
    ArrayValidator.validate = jest.fn(() => true);
    ObjectValidator.validate = jest.fn(() => true);
  });

  test("Should call string validator and validate", () => {
    // given
    const stringSchemaWithEnum: StringSchema = {
      type: "string",
      enum: ["h1", "h2", "h3", "h4"],
    };
    const data = "h1";

    // when
    const validationResult = validateSchema(data, stringSchemaWithEnum);

    // then
    expect(StringValidator.validate).toBeCalledTimes(1);
    expect(validationResult).toBe(true);
  });

  test("Should call number validator and validate", () => {
    // given
    const numberSchema: NumberSchema = {
      type: "number",
    };
    const data = 12;

    // when
    const validationResult = validateSchema(data, numberSchema);

    // then
    expect(NumberValidator.validate).toBeCalledTimes(1);
    expect(validationResult).toBe(true);
  });

  test("Should call boolean validator and validate", () => {
    // given
    const booleanSchema: BooleanSchema = {
      type: "boolean",
    };
    const data = false;

    // when
    const validationResult = validateSchema(data, booleanSchema);

    // then
    expect(BooleanValidator.validate).toBeCalledTimes(1);
    expect(validationResult).toBe(true);
  });

  test("Should call array validator and validate", () => {
    // given
    const arraySchema: ArraySchema = {
      type: "array",
      items: {
        type: "number",
      },
    };
    const data = [1, 2, 3];

    // when
    const validationResult = validateSchema(data, arraySchema);

    // then
    expect(ArrayValidator.validate).toBeCalledTimes(1);
    expect(validationResult).toBe(true);
  });

  test("Should call object validator and validate", () => {
    // given
    const objectSchema: ObjectSchema = {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
    };
    const data = {
      name: "A",
    };

    // when
    const validationResult = validateSchema(data, objectSchema);

    // then
    expect(ObjectValidator.validate).toBeCalledTimes(1);
    expect(validationResult).toBe(true);
  });
});
