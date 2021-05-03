export interface ValidationError {
  field: string;
  messages: string[];
}

export interface BaseModel {
  validate: () => Promise<ValidationError[]>;
}

export interface Persistable<T> {
  save: (...params: any) => Promise<void>;
  fetch: () => Promise<void>;
  setModel: (model: T) => void;
};

export interface ApiResponseModel {
  statusCode: number;
  requestBody: any;
  validationErrors: ValidationError[];
  message: string;
  withModel: (model: any) => ApiResponseModel & any;
}

export function ApiResponse({
  statusCode = 0,
  requestBody = null,
  validationErrors = [],
  message = ''
} = {}): ApiResponseModel {
  return {
    statusCode,
    requestBody,
    validationErrors,
    message,

    withModel(model) {
      return Object.assign({}, this, model);
    }

  };
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
