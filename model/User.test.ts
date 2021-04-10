import { User, UserRole } from "./User";

describe('User model tests', () => {
  const user = User({
    name: 'John Doe',
    role: UserRole['PLAYER']
  });

 const userWithWrongRole = User({
    name: 'John Doe',
     // @ts-ignore: for test purposes
    role: 'ADMIN'
  });
  
  test('User model should be serializable', () => {
    const serialized = JSON.stringify(user);
    expect(serialized).toBe("{\"id\":0,\"name\":\"John Doe\",\"role\":\"PLAYER\"}");
  });

  test('validate method should return [] if model is valid', async () => {
    const result = await user.validate();
    expect(result).toEqual([]);
  });

  test('validate method should return a lisr of validation errors id model is invalid', async () => {
    const result = await userWithWrongRole.validate();
    expect(result).toEqual([{
      field: 'role',
      messages: ['role must be one of the following values: OBSERVER, PLAYER']
    }]);
  });
});