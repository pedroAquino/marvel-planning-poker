import { v4 as uuid } from 'uuid';
import { Session, SessionModel } from './Session';
import { User, UserModel } from '../user/User';
import { createUser } from '../user/usersRepository';
import models from '../shared/db/models/index';

export async function getSessions(): Promise<SessionModel[]> {
  const dbSessions = await models.Sessions.findAll();
  const sessions = dbSessions.map(Session);
  return sessions;
}

export async function getSession(idOrDisplayId: number | string): Promise<SessionModel> {
  if (!idOrDisplayId) {
    return null;
  }
  
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

  const dbSession = await models.Sessions.findOne({ where });

  if (!dbSession) {
    return null;
  }

  const participants = await dbSession.getUsers();
  const creator = await dbSession.getUser();

  const session = Session({
    ...dbSession.dataValues,
    participants: participants.map(User),
    creator: User(creator)
  });

  return session;
}

export async function createSession(session:SessionModel, user: UserModel): Promise<SessionModel> {  
  session.displayId = uuid();
  
  if (!user.id) {
    user = await createUser(user);
  }

  const createdSession = await models.Sessions.create({
    ...session,
    UserId: user.id
  });
    
  const created = Session(createdSession);
  created.creator = user;

  return created;
}
