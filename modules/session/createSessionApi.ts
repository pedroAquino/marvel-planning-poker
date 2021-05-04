import { Session } from './Session';
import { ApiResponse } from '../shared/model/Base';

export default async function handler(req, res) {
  const session = Session(req.body.session);
  const validationErrors = await session.validate();

  if (validationErrors.length > 0) {
    return res.status(400).json(
      ApiResponse({
        statusCode: 400,
        requestBody: req.body,
        validationErrors,
        message: 'Session could not be created',
      })
    );
  }

  await session.save(session.creator);

  return res.status(200).json(
    ApiResponse({
      statusCode: 200,
      requestBody: req.body,
      validationErrors: [],
      message: 'Session created with success'
    }).withModel({ createdSession: session })
  );

};
