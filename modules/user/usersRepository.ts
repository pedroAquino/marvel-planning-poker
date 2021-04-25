import { UserModel, User } from './User';
import models from '../shared/db/models/index';
import { SessionModel } from "../session/Session";

export async function getUsers() {
  const dbUsers = await models.Users.findAll();
  const users = dbUsers.map(User);
  return users;
}

export async function createUser(user: UserModel): Promise<UserModel> {
  const created = await models.Users.create(user);
  return User(created);
}

export async function addUserToSession(user: UserModel, session: SessionModel) {
  await models.Users.update({ SessionId: session.id }, {
    where: {
      id: user.id
    }
  })
}