export class NumberValidationError extends Error {
  detailedError: ItemValidationError;

  constructor(detailedError: ItemValidationError) {
    super();
    this.name = "NumberValidationError";
    this.detailedError = detailedError;
  }
}
