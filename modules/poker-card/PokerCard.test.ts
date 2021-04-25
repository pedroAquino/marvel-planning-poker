import { PokerCard, PokerCardSize } from "./PokerCard";

describe('PokerCard model tests', () => {
  test('PokerCard should have correct shape', () => {
    expect(
      JSON.stringify(PokerCard())
    ).toBe(
      JSON.stringify({ size: '1' })
    );
  });

  test('PokerCard should return validation errors with an incorrect size', async () => {
    // @ts-ignore
    const pokerCard = PokerCard({ size: 'abc' });
    const validationErrors = await pokerCard.validate();

    expect(validationErrors.length).toBe(1);
    expect(validationErrors).toContainEqual({
      field: 'size',
      messages: ['size must be one of the following values: 1, 2, 3, 5, 8, 13']
    });
  });

  test('PokerCard should validate correctly with a correct size', async () => {
    const valid = [
      PokerCardSize['one'],
      PokerCardSize['two'],
      PokerCardSize['three'],
      PokerCardSize['five'],
      PokerCardSize['eight'],
      PokerCardSize['thirteen']
    ].map(size => PokerCard({ size }));
    
    valid.forEach(async (pokerCard) => {
      const validationErrors = await pokerCard.validate();
      expect(validationErrors.length).toBe(0);
    });

  });

});