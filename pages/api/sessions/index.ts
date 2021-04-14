import { SessionModel, Session } from '../../../model/Session';
import { ApiResponse } from '../../../model/Base';
import { createSession } from '../../../repositories/sessionsRepository';
import { createUser } from '../../../repositories/usersRepository';

export interface SessionPostRequest {
  session: SessionModel;
};

export interface SessionPostResponse extends ApiResponse<SessionPostRequest> {
  createdSession: SessionModel;
};

export default async function handler(req, res) {
  const session = Session(req.body.session);
  const validationErrors = await session.validate();

  if (validationErrors.length > 0) {
    return res.status(400).json({
      statusCode: '400',
      requestBody: req.body,
      validationErrors,
      message: 'Session could not be created',
      createdSession: null
    });
  }

  const user = await createUser(session.creator);
  const createdSession = await createSession(session, user);

  return res.status(200).json({
    statusCode: '200',
    requestBody: req.body,
    createdSession,
    validationErrors: [],
    message: 'Session created with success'
  });
};