import type { StringSchema } from "../lib/schema";
import { StringValidator } from "../lib/validators";

describe("String schema validator", () => {
  let schema: StringSchema = {
    type: "string",
  };
  let schemaWithEnum: StringSchema = {
    type: "string",
    enum: ["h1", "h2", "h3", "h4"],
  };

  test("Empty string", () => {
    const data = "";

    expect(StringValidator.validate(data, schema)).toBe(true);
  });

  test("Enum", () => {
    const data = ["h1", "h2"];

    expect(StringValidator.validate(data, schema)).toBe(true);
  });

  test("Number", () => {
    const data = 10;

    expect(StringValidator.validate(data, schema)).toBe(false);
  });
});
