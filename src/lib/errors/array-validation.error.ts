export class ArrayValidationError extends Error {
  detailedErrors: ItemValidationError[];

  constructor(message: string, detailedErrors?: ItemValidationError[]) {
    super(message);
    this.name = "ArrayValidationError";
    this.detailedErrors = detailedErrors ?? [];
  }
}
