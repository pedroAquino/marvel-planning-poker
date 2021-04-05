import { Session, SessionModel } from '../model/Session';
import models from '../db/models/index';
import { createUser } from './usersRepository';
import { User } from '../model/User';

export async function getSessions(): Promise<SessionModel[]> {
  const dbSessions = await models.Sessions.findAll();
  const sessions = dbSessions.map(Session);
  return sessions;
}

export async function getSession(idOrDisplayId: number | string): Promise<SessionModel> {
  let where;
  
  if (typeof idOrDisplayId === 'number') {
    where = {
      id: idOrDisplayId
    };
  }

  if (typeof idOrDisplayId === 'string') {
    where = {
      displayId: idOrDisplayId
    };
  }

  const dbSession = await models.Sessions.findAll({ where });
  const participants = await dbSession[0].getUsers();

  const session = Session(dbSession[0]);
  session.participants = participants;

  return session;
}

export async function createSession(session:SessionModel): Promise<SessionModel> {
  const user = await createUser(session.creator);
  
  const createdSession = await models.Sessions.create({
    ...session,
    UserId: user.id
  });
  
  const creator = await createdSession.getUser();
  
  const created = Session(createdSession);
  created.creator = User(creator);

  return created;
}
