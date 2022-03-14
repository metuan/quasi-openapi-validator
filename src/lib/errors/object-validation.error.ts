export class ObjectValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ObjectValidationError";
  }
}
