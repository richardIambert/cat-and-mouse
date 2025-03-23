import catAndMouse from './cat-and-mouse-1';

test("Returns false if garden doesn't contain a cat and mouse.", () => {
  expect(catAndMouse([], 1)).toBe(false);
  expect(catAndMouse(['C'], 1)).toBe(false);
  expect(catAndMouse(['M'], 1)).toBe(false);
});

test("Returns false if the cat can't reach the mouse, taking into account walls.", () => {
  expect(catAndMouse(['C', 'W', 'M'], 1)).toBe(false);
  expect(catAndMouse(['C', 'W', 'M'], 2)).toBe(false);
  expect(catAndMouse(['C', 'X', 'W', 'M'], 1)).toBe(false);
  expect(catAndMouse(['C', 'X', 'W', 'M'], 2)).toBe(false);
  expect(catAndMouse(['C', 'X', 'W', 'M'], 3)).toBe(false);
  expect(catAndMouse(['C', 'W', 'X', 'M'], 1)).toBe(false);
  expect(catAndMouse(['C', 'W', 'X', 'M'], 2)).toBe(false);
  expect(catAndMouse(['C', 'W', 'X', 'M'], 3)).toBe(false);
});

test('Returns true if the cat can reach the mouse, taking into account walls.', () => {
  expect(catAndMouse(['C', 'W', 'M'], 3)).toBe(true);
  expect(catAndMouse(['C', 'X', 'W', 'M'], 4)).toBe(true);
  expect(catAndMouse(['C', 'X', 'W', 'M'], 5)).toBe(true);
  expect(catAndMouse(['C', 'X', 'W', 'M'], 6)).toBe(true);
  expect(catAndMouse(['C', 'W', 'X', 'M'], 4)).toBe(true);
  expect(catAndMouse(['C', 'W', 'X', 'M'], 5)).toBe(true);
  expect(catAndMouse(['C', 'W', 'X', 'M'], 6)).toBe(true);
});

test('The cat can chase the mouse in either direction.', () => {
  expect(catAndMouse(['C', 'M'], 1)).toBe(true);
  expect(catAndMouse(['M', 'C'], 1)).toBe(true);
  expect(catAndMouse(['C', 'X', 'M'], 2)).toBe(true);
  expect(catAndMouse(['M', 'X', 'C'], 2)).toBe(true);
  expect(catAndMouse(['C', 'X', 'X', 'M'], 3)).toBe(true);
  expect(catAndMouse(['M', 'X', 'X', 'C'], 3)).toBe(true);
  expect(catAndMouse(['C', 'X', 'W', 'X', 'M'], 5)).toBe(true);
  expect(catAndMouse(['M', 'X', 'W', 'X', 'C'], 5)).toBe(true);
});
