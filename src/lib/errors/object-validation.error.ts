export class ObjectValidationError extends Error {
  detailedErrors: ItemValidationError[];

  constructor(message: string, detailedErrors?: ItemValidationError[]) {
    super(message);
    this.name = "ObjectValidationError";
    this.detailedErrors = detailedErrors ?? [];
  }
}
