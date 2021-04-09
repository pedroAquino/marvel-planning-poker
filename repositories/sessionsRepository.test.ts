import { Session } from '../model/Session';
import { createSession, getSessions, getSession } from './sessionsRepository';
import { createUser } from './usersRepository';
import { v4 as uuid } from 'uuid';
import { User, UserRole } from '../model/User';

test('getSessions returns at least the default session from database', async () => {
  const sessions = await getSessions();
  expect(sessions.map(s => s.name)).toContain('Demo Session');
});

test('createSession should create a session and return the created session', async () => {
  const user = await createUser(User({ name: 'Lucas Doe', role: UserRole['PLAYER'] }));
  const session = Session({
    displayId: uuid(),
    name: 'My new Session',
    creator: user
  });
  const created = await createSession(session);
  session.id = created.id;
  session.creator.id = created.creator.id;
  expect(created).toEqual(session);
});

test('getSession should return a session based on id or displayId', async () => {
  const sessions = await getSessions();
  const session = sessions[0];
  
  const _session1 = await getSession(session.id);
  const _session2 = await getSession(session.displayId);
  
  session.participants = _session2.participants;

  expect(session).toEqual(_session1);
  expect(session).toEqual(_session2);
});