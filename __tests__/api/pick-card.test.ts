import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/sessions/[sessionDisplayId]/events/pick-card';

describe('api/sessions/{sessionDisplayId}/events/pick-card api tests', () => {

  test('api/sessions/{sessionDisplayId}/events/pick-card should send a pickcard event', async () => {
    const sessionDisplayId = '1234';
    const requestBody = {
      event: {
        user: {
          id: 20,
          name: 'John Doe',
          role: 'PLAYER'
        },
        card: {
          size: '13'
        }
      }
    };
    const expectedResponse = {
      statusCode: '200',
      requestBody,
      sentEvent: requestBody.event,
      validationErrors: [],
      message: 'pick card event sent with success !'
    };

    const {req, res} = createMocks({
      method: 'POST',
      url: `/api/sessions/${sessionDisplayId}/events/pick-card`,
      query: {
        sessionDisplayId
      },
      body: requestBody
    });

    await handler(req, res);

    const data = res._getJSONData();

    expect(res._getStatusCode()).toBe(200);
    expect(data).toEqual(expectedResponse);

  });

})