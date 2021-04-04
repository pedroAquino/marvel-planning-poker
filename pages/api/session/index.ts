import { Session, ISession } from '../../../model/Session';
import { User, IUser, } from '../../../model/User';
import models from '../../../db/models/index';

interface ICreateSessionRequest {
  creator: IUser;
}

interface ICreateSessionResponse {
  session: ISession;
}

async function getSessions(req, res) {
  const sessions = await models.Sessions.findAll();
  res.status(200).json(sessions);
}

async function createSession(req, res) {
  const request: ICreateSessionRequest = req.body;
  
  const response: ICreateSessionResponse = {
    session: Session({ creator: User(request.creator) })
  };
  
  res.status(200).json(response);
}

export default async function handler(req, res) {
  const handlers = {
    GET: getSessions,
    POST: createSession
  };
  await handlers[req.method](req, res);
};