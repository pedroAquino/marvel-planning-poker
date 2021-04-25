import { createMocks } from 'node-mocks-http';
import handler, { SessionPostRequest, SessionPostResponse } from './createSessionApi';

describe('/api/sessions tests', () => {
  const requestBody: SessionPostRequest = {
    session: {
      name: 'new session',
      creator: {
        name: 'John Doe',
        // @ts-ignore: for test purposes
        role: 'PLAYER'
      },
      participants: []
    }
  };

  const bodyWithEmptyName: SessionPostRequest = {
    session: {
      name: '',
      creator: {
        name: 'John Doe',
        // @ts-ignore: for test purposes
        role: 'PLAYER'
      },
      participants: []
    }
  };

  const successResponse: SessionPostResponse = {
    statusCode: '200',
    requestBody,
    validationErrors: [],
    message: 'Session created with success',
    createdSession: null
  };

  const errorResponse: SessionPostResponse = {
    statusCode: '400',
    requestBody: bodyWithEmptyName,
    validationErrors: [
      {
        field: 'name',
        messages: ['name is a required field']
      }
    ],
    message: 'Session could not be created',
    createdSession: null
  };

  test('/api/sessions POST should create a new session', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      url: '/api/sessions',
      body: requestBody
    });

    await handler(req, res);

    const data = res._getJSONData();
    expect(data.createdSession.displayId).not.toBe('');
    data.createdSession = null;

    expect(res._getStatusCode()).toBe(200);
    expect(data).toEqual(successResponse);
  });

  test('/api/sessions POST should return validation errors when passing invalid body', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      url: '/api/sessions',
      body: bodyWithEmptyName
    });

    await handler(req, res);

    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toEqual(errorResponse);
  });

});