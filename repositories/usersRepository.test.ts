import { addUserToSession, createUser, getUsers } from './usersRepository';
import { UserModel, User, UserRole } from '../model/User';
import { getSession, getSessions } from './sessionsRepository';

test('createUser should create a user in db and return the created user', async () => {
  const user = User({
    name: 'Jane Doe',
    role: UserRole['OBSERVER']
  });
  const created = await createUser(user);
  user.id = created.id;
  expect(created).toEqual(user);
});

test('addUserToSession should set sessionId of user to the specific session', async () => {
  const sessions = await getSessions();
  const users = await getUsers();
  await addUserToSession(users[0], sessions[0]);
  const sessionWithUser = await getSession(sessions[0].id);
  expect(sessionWithUser.participants.map(u => u.id)).toContain(users[0].id);
});
