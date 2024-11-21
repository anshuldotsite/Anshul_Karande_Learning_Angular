import { CoffeeStrengthPipe } from './coffee-strength.pipe';

describe('CoffeeStrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new CoffeeStrengthPipe();
    expect(pipe).toBeTruthy();
  });
});
