import { SessionModel, Session } from './Session';
import { ApiResponse } from '../shared/model/Base';
import { createSession, getSession } from './sessionsRepository';
import { addUserToSession, createUser } from '../user/usersRepository';

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

  await addUserToSession(user, createdSession);
  const sessionWithUser = await getSession(createdSession.id);

  return res.status(200).json({
    statusCode: '200',
    requestBody: req.body,
    createdSession: sessionWithUser,
    validationErrors: [],
    message: 'Session created with success'
  });
};