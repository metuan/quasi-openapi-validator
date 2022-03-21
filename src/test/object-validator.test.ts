import { ObjectValidationError } from "../lib/errors";
import { ObjectSchema } from "../lib/schema";
import { ObjectValidator } from "../lib/validators";

describe("Object validator", () => {
  const colorEnum = ["black", "brown", "blue"];
  const petSchema: ObjectSchema = {
    type: "object",
    properties: { name: { type: "string" }, breed: { type: "string", enum: ["dog"] } },
    required: ["name", "breed"],
  };
  const personSchema: ObjectSchema = {
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
      age: { type: "number" },
      favouriteColor: { type: "string", enum: colorEnum },
      pets: {
        type: "array",
        items: petSchema,
      },
    },
  };

  test("Should validate random person", () => {
    const data = {
      firstName: "K",
      lastName: "R",
      age: 16,
      favouriteColor: "brown",
      pets: [
        { name: "A1", breed: "dog" },
        { name: "A2", breed: "dog" },
      ],
    };

    expect(ObjectValidator.validate(data, personSchema)).toBe(true);
  });

  test("Should throw an error when required prooperty is missing", () => {
    const data = {
      firstName: "K",
    };

    expect(() => ObjectValidator.validate(data, personSchema)).toThrow(ObjectValidationError);
  });

  test("Should throw an error when prooperty is not defined in schema", () => {
    const data = {
      firstName: "K",
      lastName: "R",
      age: 16,
      favouriteColor: "brown",
      favouriteSong: "We will rock you",
      pets: [
        { name: "A1", breed: "dog" },
        { name: "A2", breed: "cat" },
      ],
    };

    expect(() => ObjectValidator.validate(data, personSchema)).toThrow(ObjectValidationError);
  });

  test("Should throw an error when type mismtach - array of objects", () => {
    const data = [
      {
        firstName: "K",
        lastName: "R",
        age: 16,
        favouriteColor: "brown",
        favouriteSong: "We will rock you",
        pets: [
          { name: "A1", breed: "dog" },
          { name: "A2", breed: "cat" },
        ],
      },
    ];

    expect(() => ObjectValidator.validate(data, personSchema)).toThrow(ObjectValidationError);
  });
});
