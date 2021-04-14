import { ApiResponse } from '../../../../../model/Base';
import { JoinSessionEventModel, JoinSessionEvent } from '../../../../../model/JoinSessionEvent';
import { UserModel } from '../../../../../model/User';
import { createUser, addUserToSession } from '../../../../../repositories/usersRepository';
import { getSession } from '../../../../../repositories/sessionsRepository';
import { triggerJoinSessionEvent } from '../../../../../real-time-provider';

interface JoinSessionRequest {
  user: UserModel;
}

interface JoinSessionResponse extends ApiResponse<JoinSessionRequest> {
  createdUser: UserModel;
  sentEvent: JoinSessionEventModel;
}

export default async function handler(req, res) {
  const _user = req.body.user;
  const { sessionDisplayId } = req.query;

  const session = await getSession(sessionDisplayId);
  
  if (!session) {
    return res.status(400).json({
      statusCode: '400',
      requestBody: req.body,
      validationErrors: [{
        field: 'displayId',
        messages: ['invalid session display id provided on the querystring'],
      }],
      message: 'join session event could not be sent',
      createdUser: null,
      sentEvent: null
    });
  }

  const user = await createUser(_user);
  await addUserToSession(user, session);

  const event = JoinSessionEvent({
    session,
    user
  });

  await triggerJoinSessionEvent(event);

  const response: JoinSessionResponse = {
    statusCode: '200',
    requestBody: req.body,
    validationErrors: [],
    message: 'join session event sent with success',
    createdUser: user,
    sentEvent: event
  };

  return res.status(200).json(response);
}
