export class NumberValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NumberValidationError";
  }
}
