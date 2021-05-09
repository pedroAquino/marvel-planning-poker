import { ApiResponse } from '../../shared/model/Base';
import { User } from '../../user/User';
import { Session } from '../Session';
 
export async function handler(req, res) {
  const { sessionDisplayId: displayId } = req.query;
  const user = User(req.body.event.sender);
  const session = Session({ displayId });

  await session.fetch();
  await user.fetch();

  if (!session) {
    return res.status(404).json(
      ApiResponse({
        statusCode: 404,
        requestBody: req.body,
        validationErrors: [{
          field: 'displayId',
          messages: ['invalid session display id provided on the querystring'],
        }],
        message: 'join session event could not be sent',
      }).withModel({
        createdUser: null,
        sentEvent: null
      })
    );
  }

  if (!session.hasParticipant(user.id)) {
    return res.status(400).json(
      ApiResponse({
        statusCode: 400,
        requestBody: req.body,
        validationErrors: [{
          field: 'user',
          messages: ['user is not a participant od the session'],
        }],
        message: 'join session event could not be sent',
      }).withModel({
        createdUser: null,
        sentEvent: null
      })
    );   
  }

  const sentEvent = await session.showAllCards(user);

  return res.status(200).json(
    ApiResponse({
      statusCode: 200,
      requestBody: req.body,
      validationErrors: [],
      message: 'pick all cards event sent with success',
    }).withModel({
      sentEvent
    })
  );
  
};

export default handler;
