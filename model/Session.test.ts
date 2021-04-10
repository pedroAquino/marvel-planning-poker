import { Session } from './Session';
import { User, UserRole } from './User';

describe('Session model tests', () => {
  const session = Session({
    id: 20,
    displayId: 'abc',
    name: 'my session name',
    creator: User({
      id: 20,
      name: 'John Doe',
      role: UserRole['PLAYER'],
    }),
    participants: []
  });

  const sessionWithEmptyName =  Session({
    id: 20,
    displayId: 'abc',
    name: '',
    creator: User({
      id: 20,
      name: 'John Doe',
      role: UserRole['PLAYER'],
    }),
    participants: []
  });

  test('Session model should be serializable', () => {
    const serialized = JSON.stringify(session);
    expect(serialized).toBe("{\"id\":20,\"displayId\":\"abc\",\"name\":\"my session name\",\"creator\":{\"id\":20,\"name\":\"John Doe\",\"role\":\"PLAYER\"},\"participants\":[]}");
  });

  test('validate method should return [] if model is valid', async () => {
    const result = await session.validate();
    expect(result).toEqual([]);
  });

  test('validate method should return a lisr of validation errors id model is invalid', async () => {
    const result = await sessionWithEmptyName.validate();
    expect(result).toEqual([{
      field: 'name',
      messages: ['name is a required field']
    }]);
  });

});