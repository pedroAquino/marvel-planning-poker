import { ApiResponse } from '../../shared/model/Base';
import { Session } from '../../session/Session';
import { PokerCard } from './PokerCard';
import { User } from '../User';

export default async function handler(req, res) {
  const { sessionDisplayId: displayId } = req.query;
  const session = Session({ displayId });
  const pokerCard = PokerCard(req.body.event.card);
  const user = User(req.body.event.user);

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

  const usrValidationErrors = await user.validate();
  const cardValidationErrors = await pokerCard.validate();

  if (usrValidationErrors.length > 0 || cardValidationErrors.length > 0) {
    return res.status(400).json(
      ApiResponse({
        statusCode: 400,
        requestBody: req.body,
        validationErrors: [
          ...usrValidationErrors,
          ...cardValidationErrors
        ],
        message: 'pick card event could not be sent',
      }).withModel({
        sentEvent: null
      })
    );
  }
  
  await user.fetch();

  if (!session.hasParticipant(user.id)) {
    return res.status(400).json(
      ApiResponse({
        statusCode: 200,
        requestBody: req.body,
        validationErrors: [],
        message: 'pick card event sent with success',
      }).withModel({
        senteEvent: null
      })
    );
  }

  const sentEvent = await user.pickCard(pokerCard.size);

  return res.status(200).json(
    ApiResponse({
      statusCode: 200,
      requestBody: req.body,
      validationErrors: [],
      message: 'pick card event sent with success'
    }).withModel({ sentEvent })
  );
}
