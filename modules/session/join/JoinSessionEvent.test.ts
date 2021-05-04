import { JoinSessionEvent } from './JoinSessionEvent';
import { User } from '../../user/User';

describe('JoinSessionEvent tests', () => {
  const joinSessionEvent = {
    sessionDisplayId: '',
    user: User(),
  };
  test('JoinSessionEvent should have correct shape', () => {
    expect(
      JSON.stringify(JoinSessionEvent())
    ).toBe(
      JSON.stringify(joinSessionEvent)
    );
  })
});
