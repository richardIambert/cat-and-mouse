import catAndMouse from './cat-and-mouse-2';

test("Returns 0 if the garden doesn't contain a cat and mouse.", () => {
  expect(catAndMouse([], 1)).toBe(0);
  expect(catAndMouse(['C'], 1)).toBe(0);
  expect(catAndMouse(['M'], 1)).toBe(0);
});

test("Returns 0 if the cat can't catch any mice.", () => {
  expect(catAndMouse(['C', 'M'], 0)).toBe(0);
  expect(catAndMouse(['C', 'X', 'M'], 1)).toBe(0);
  expect(catAndMouse(['M', 'C'], 0)).toBe(0);
  expect(catAndMouse(['M', 'X', 'C'], 1)).toBe(0);
  expect(catAndMouse(['M', 'C', 'M'], 0)).toBe(0);
  expect(catAndMouse(['M', 'X', 'C', 'X', 'M'], 1)).toBe(0);
  expect(catAndMouse(['M', 'X', 'X', 'C', 'X', 'X', 'M'], 2)).toBe(0);
});

test('Returns 1 if the cat can catch 1 mouse on either side.', () => {
  expect(catAndMouse(['C', 'M'], 1)).toBe(1);
  expect(catAndMouse(['C', 'X', 'M'], 2)).toBe(1);
  expect(catAndMouse(['M', 'C'], 1)).toBe(1);
  expect(catAndMouse(['M', 'X', 'C'], 2)).toBe(1);
  expect(catAndMouse(['M', 'C', 'M'], 1)).toBe(1);
  expect(catAndMouse(['M', 'X', 'C', 'X', 'M'], 2)).toBe(1);
  expect(catAndMouse(['M', 'X', 'X', 'C', 'X', 'X', 'M'], 3)).toBe(1);
  expect(catAndMouse(['M', 'X', 'X', 'X', 'C', 'X', 'X', 'M'], 3)).toBe(1);
  expect(catAndMouse(['M', 'X', 'X', 'X', 'C', 'X', 'X', 'M'], 3)).toBe(1);
  expect(catAndMouse(['M', 'M', 'X', 'X', 'C', 'X', 'X', 'M'], 3)).toBe(1);
  expect(catAndMouse(['M', 'M', 'M', 'X', 'X', 'C', 'X', 'X', 'M'], 3)).toBe(1);
});

test('Returns the larger catch of mice when the cat can catch mice on both sides.', () => {
  expect(catAndMouse(['M', 'C', 'M', 'M'], 2)).toBe(2);
  expect(catAndMouse(['M', 'M', 'M', 'C', 'M', 'M'], 3)).toBe(3);
  expect(catAndMouse(['M', 'X', 'C', 'X', 'M', 'M'], 3)).toBe(2);
});
