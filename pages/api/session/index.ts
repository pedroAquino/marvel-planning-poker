import models from '../../../db/models/index';

async function getSessions(req, res) {
  const sessions = await models.Sessions.findAll();
  const user = await sessions[0].getUser();
  res.status(200).json(user);
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