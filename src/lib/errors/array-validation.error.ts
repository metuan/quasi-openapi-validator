export class ArrayValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ArrayValidationError";
  }
}
