import { ApiResponse } from '../../shared/model/Base';
import { User } from '../../user/User';
import { Session } from '../Session';

export default async function handler(req, res) {
  const { sessionDisplayId: displayId } = req.query;
  const user = User(req.body.user);
  const session = Session({ displayId });

  await session.fetch();

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

  const validationErrors = await user.validate();

  if (validationErrors.length > 0) {
    return res.status(400).json(
      ApiResponse({
        statusCode: 400,
        requestBody: req.body,
        validationErrors,
        message: 'join session event could not be sent',
      }).withModel({
        createdUser: null,
        sentEvent: null
      })
    );
  }

  await user.save();
  const sentEvent = await session.join(user);

  return res.status(200).json(
    ApiResponse({
      statusCode: 200,
      requestBody: req.body,
      validationErrors: [],
      message: 'join session event sent with success',
    }).withModel({
      createdUser: user,
      sentEvent
    })
  );

}
