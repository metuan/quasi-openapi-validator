export class BooleanValidationError extends Error {
  detailedError: ItemValidationError;

  constructor(detailedError: ItemValidationError) {
    super();
    this.name = "BooleanValidationError";
    this.detailedError = detailedError;
  }
}
