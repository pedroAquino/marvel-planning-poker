import { ApiResponse } from '../shared/model/Base';
import { PickCardEventModel } from './PickCardEvent';
import { triggerPickCardEvent } from '../shared/real-time/realTimeProvider';
import { getSession } from '../session/sessionsRepository';

interface PickCardEventRequest {
  event: PickCardEventModel;
}

interface PickCardEventResponse extends ApiResponse<PickCardEventRequest> {
  sentEvent: PickCardEventModel;
}

export default async function handler(req, res) {
  const { sessionDisplayId } = req.query;
  const event = req.body.event;
  const session = await getSession(sessionDisplayId);

  if (!session) {
    return res.status(400).json({
      statusCode: '400',
      requestBody: req.body,
      validationErrors: [{
        field: 'displayId',
        messages: ['invalid session display id provided on the querystring'],
      }],
      message: 'pick card event could not be sent',
      sentEvent: null
    });
  }

  if (!session.hasParticipant(event.user.id)) {
    return res.status(400).json({
      statusCode: '400',
      requestBody: req.body,
      validationErrors: [{
        field: 'user.id',
        messages: ['invalid user id'],
      }],
      message: 'pick card event could not be sent',
      sentEvent: null
    });
  }

  await triggerPickCardEvent(event);

  const response: PickCardEventResponse = {
    statusCode: '200',
    requestBody: req.body,
    validationErrors: [],
    message: 'pick card event sent with success',
    sentEvent: event
  };

  return res.status(200).json(response);
};