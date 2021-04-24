import { PickCardEvent } from "./PickCardEvent";

describe('PickCardEvent model tests', () => {
  const pickCardEvent = {
    user: {
      id: 0,
      name: '',
      role: 'PLAYER'
    },
    card: {
      size: '1'
    }
  };
  
  test('PickCard event should have correct shape', () => {
    expect(
      JSON.stringify(PickCardEvent())
    ).toBe(
      JSON.stringify(pickCardEvent)
    )
  }); 

});