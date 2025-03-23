import catAndMouse from './cat-and-mouse-0';

test("Returns false if the garden doesn't contain a cat and mouse.", () => {
  expect(catAndMouse([], 1)).toBe(false);
  expect(catAndMouse(['C'], 1)).toBe(false);
  expect(catAndMouse(['M'], 1)).toBe(false);
});

test("Returns false if the cat can't reach the mouse.", () => {
  expect(catAndMouse(['M', 'C'], 0)).toBe(false);
  expect(catAndMouse(['C', 'X', 'M'], 1)).toBe(false);
  expect(catAndMouse(['M', 'X', 'X', 'C'], 2)).toBe(false);
});

test('Returns true if the cat an reach the mouse.', () => {
  expect(catAndMouse(['C', 'M'], 1)).toBe(true);
  expect(catAndMouse(['M', 'X', 'C'], 2)).toBe(true);
  expect(catAndMouse(['M', 'X', 'X', 'C'], 3)).toBe(true);
  expect(catAndMouse(['C', 'M'], 2)).toBe(true);
  expect(catAndMouse(['M', 'X', 'C'], 3)).toBe(true);
  expect(catAndMouse(['M', 'X', 'X', 'C'], 4)).toBe(true);
});

test('The cat can chase the mouse in either direction.', () => {
  expect(catAndMouse(['C', 'M'], 1)).toBe(true);
  expect(catAndMouse(['M', 'C'], 1)).toBe(true);
  expect(catAndMouse(['C', 'X', 'M'], 2)).toBe(true);
  expect(catAndMouse(['M', 'X', 'C'], 2)).toBe(true);
  expect(catAndMouse(['C', 'X', 'X', 'M'], 3)).toBe(true);
  expect(catAndMouse(['M', 'X', 'X', 'C'], 3)).toBe(true);
});
