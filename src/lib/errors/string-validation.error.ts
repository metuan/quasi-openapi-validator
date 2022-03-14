export class StringValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StringValidationError";
  }
}
