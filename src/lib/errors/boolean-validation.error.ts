export class BooleanValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BooleanValidationError";
  }
}
