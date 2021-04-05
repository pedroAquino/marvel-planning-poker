import { SessionModel } from '../../../db/models/sessions';
import models from '../../../db/models/index';

async function getSessions(req, res) {
  const sessions: SessionModel[] = await models.Sessions.findAll();
  // sessions.map((session: SessionModel) => {
  //   session 
  // });
  res.status(200).json(sessions);
}

async function createSession(req, res) {
  return null;
}

export default async function handler(req, res) {
  const handlers = {
    GET: getSessions,
    POST: createSession
  };
  await handlers[req.method](req, res);
};