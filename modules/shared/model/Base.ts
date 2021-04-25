export interface ValidationError {
  field: string;
  messages: string[];
}

export interface BaseModel {
  validate: () => Promise<ValidationError[]>;
}

export interface ApiResponse<T> {
  statusCode: string;
  requestBody: T;
  validationErrors: ValidationError[];
  message: string;
}

export async function validate(model: any, schema: any): Promise<ValidationError[]> {
  try {
    await schema.validate(model, { abortEarly: false });
    return [];
  } catch (error) {
    return error.inner.map(err => ({
      field: err.path,
      messages: err.errors
    }))
  }
}
