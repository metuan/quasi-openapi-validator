import { ItemValidationError } from "./item-validation.interface";

export class OneOfValidationError extends Error {
  detailedErrors: ItemValidationError[];

  constructor(message: string, detailedErrors?: ItemValidationError[]) {
    super(message);
    this.name = "OneOfValidationError";
    this.detailedErrors = detailedErrors ?? [];
  }
}
