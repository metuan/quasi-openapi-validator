export class StringValidationError extends Error {
  detailedError: ItemValidationError;

  constructor(detailedError: ItemValidationError) {
    super();
    this.name = "StringValidationError";
    this.detailedError = detailedError;
  }
}
