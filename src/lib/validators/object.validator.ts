import { validateSchema } from "..";
import { ObjectValidationError } from "../errors";
import type { ObjectSchema } from "../schema";
import { Validator } from "./validator.interface";

export const ObjectValidator: Validator<ObjectSchema> = {
  validate: (data, schema) => {
    if (typeof data !== "object") {
      throw new ObjectValidationError("Type of the value is not 'object'");
    }

    /*
      Kind reminder, typeof [...] is an 'object'.
    */
    if (Array.isArray(data)) {
      throw new ObjectValidationError("Provided value is an array");
    }

    /*
      Check if all of properties in data are defined in schema 
    */
    if (schema?.properties) {
      if (!Object.keys(data).every((propertyName) => Object.keys(schema?.properties).includes(propertyName))) {
        throw new ObjectValidationError("Schema does not allow some of the properties");
      }
    }

    /*
      Check if all of the required properties in schema are defined in data 
    */
    if (schema?.required?.length) {
      if (!schema?.required.every((requiredProperty) => Object.keys(data).includes(requiredProperty))) {
        throw new ObjectValidationError("ERROR");
      }
    }

    /*
      Validate each property - 'recurring' validation. 
    */
    let validationErrors = [];
    Object.keys(data).forEach((property) => {
      try {
        validateSchema(data[property], schema?.properties[property]);
      } catch (error) {
        validationErrors.push({ item: property, message: (error as Error).message });
      }
    });

    if (validationErrors?.length) {
      throw new ObjectValidationError("Object validation failed");
    }

    return true;
  },
};
