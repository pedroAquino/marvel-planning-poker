import { ApiResponseModel, ApiResponse, BaseModel } from '../model/Base';

export async function validateRequest(request, model): Promise<ApiResponseModel> {
  const validationErrors = await model.validate();
  if (validationErrors.length > 0) {
    return ApiResponse({
      statusCode: 400,
      requestBody: request.body,
      validationErrors,
      message,
    });
  }
}