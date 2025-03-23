import { Cat, Mouse } from './class';
import catAndMouse from './cat-and-mouse-3';

test("Returns false if garden doesn't contain a cat, mouse, and hole.", () => {
  expect(catAndMouse([], 1, 1)).toBe(false);
  expect(catAndMouse(['X'], 1, 1)).toBe(false);
  expect(catAndMouse(['C'], 1, 1)).toBe(false);
  expect(catAndMouse(['M'], 1, 1)).toBe(false);
  expect(catAndMouse(['O'], 1, 1)).toBe(false);
  expect(catAndMouse(['C', 'X'], 1, 1)).toBe(false);
  expect(catAndMouse(['M', 'X'], 1, 1)).toBe(false);
  expect(catAndMouse(['O', 'X'], 1, 1)).toBe(false);
  expect(catAndMouse(['C', 'M'], 1, 1)).toBe(false);
  expect(catAndMouse(['C', 'O'], 1, 1)).toBe(false);
  expect(catAndMouse(['M', 'O'], 1, 1)).toBe(false);
});

test("A mouse's position, direction, and moves are correctly determined on creation.", () => {
  const { _position, _direction, _directionAsString, _moves } = Mouse.miceFromGarden(['M', 'O', 'C'], 1)[0];
  expect(_position).toBe(0);
  expect(_direction).toBe(1);
  expect(_directionAsString).toBe('right');
  expect(_moves).toBe(1);
});

test('Each mouse will run for its nearest hole.', () => {
  expect(Mouse.miceFromGarden(['O', 'M', 'X', 'O', 'C'], 1)[0].getDirectionAsString()).toBe('left');
  expect(Mouse.miceFromGarden(['O', 'X', 'M', 'O', 'C'], 1)[0].getDirectionAsString()).toBe('right');
});

test('If the closest holes to a mouse are equal distance, the mouse will run for the hole on its right.', () => {
  expect(Mouse.miceFromGarden(['C', 'O', 'M', 'O'], 1)[0].getDirectionAsString()).toBe('right');
  expect(Mouse.miceFromGarden(['C', 'O', 'X', 'M', 'X', 'O'], 1)[0].getDirectionAsString()).toBe('right');
});

test("The cat's position, direction, and moves are correctly determined on creation.", () => {
  const { _position, _direction, _directionAsString, _moves } = Cat.catFromGarden(['M', 'O', 'C'], 1);
  expect(_position).toBe(2);
  expect(_direction).toBe(-1);
  expect(_directionAsString).toBe('left');
  expect(_moves).toBe(1);
});

test('The cat will chase the closest mouse.', () => {
  expect(Cat.catFromGarden(['O', 'M', 'C', 'X', 'M', 'O'], 1).getDirectionAsString()).toBe('left');
  expect(Cat.catFromGarden(['O', 'M', 'X', 'X', 'C', 'X', 'M', 'O'], 1).getDirectionAsString()).toBe('right');
  expect(Cat.catFromGarden(['O', 'M', 'X', 'X', 'C', 'X', 'X', 'X', 'M', 'O'], 1).getDirectionAsString()).toBe('left');
});

test('If the closest mice to the cat are equal distance, the cat will chase the mouse to its right.', () => {
  expect(Cat.catFromGarden(['O', 'M', 'C', 'M', 'O'], 1).getDirectionAsString()).toBe('right');
  expect(Cat.catFromGarden(['O', 'M', 'X', 'C', 'X', 'M', 'O'], 1).getDirectionAsString()).toBe('right');
});

test('Returns false if the mouse reaches the hole before the cat reaches the mouse.', () => {
  expect(catAndMouse(['C', 'M', 'O'], 2, 1)).toBe(false);
  expect(catAndMouse(['O', 'M', 'C'], 2, 1)).toBe(false);
  expect(catAndMouse(['C', 'M', 'X', 'O'], 3, 2)).toBe(false);
  expect(catAndMouse(['O', 'X', 'M', 'C'], 3, 2)).toBe(false);
  expect(catAndMouse(['C', 'M', 'X', 'X', 'O'], 4, 3)).toBe(false);
  expect(catAndMouse(['O', 'X', 'X', 'M', 'C'], 4, 3)).toBe(false);
  expect(catAndMouse(['C', 'O', 'M'], 1, 1)).toBe(false);
  expect(catAndMouse(['C', 'X', 'O', 'X', 'M'], 2, 2)).toBe(false);
  expect(catAndMouse(['C', 'X', 'X', 'O', 'X', 'X', 'M'], 3, 3)).toBe(false);
  expect(catAndMouse(['C', 'X', 'O', 'M'], 2, 1)).toBe(false);
  expect(catAndMouse(['M', 'O', 'X', 'M'], 2, 1)).toBe(false);
  expect(catAndMouse(['C', 'X', 'X', 'O', 'X', 'M'], 3, 2)).toBe(false);
  expect(catAndMouse(['M', 'X', 'O', 'X', 'X', 'M'], 3, 2)).toBe(false);
});

test("Returns false if the cat doesn't have enough moves to reach the mouse.", () => {
  expect(catAndMouse(['C', 'M', 'X', 'O'], 1, 1)).toBe(false);
  expect(catAndMouse(['O', 'X', 'M', 'C'], 1, 1)).toBe(false);
  expect(catAndMouse(['C', 'M', 'X', 'X', 'O'], 2, 2)).toBe(false);
  expect(catAndMouse(['O', 'X', 'X', 'M', 'C'], 2, 2)).toBe(false);
  expect(catAndMouse(['C', 'M', 'X', 'X', 'X', 'O'], 3, 3)).toBe(false);
  expect(catAndMouse(['O', 'X', 'X', 'X', 'M', 'C'], 3, 3)).toBe(false);
});

test("Returns true if the mouse can't reach the hole but the cat can reach the mouse.", () => {
  expect(catAndMouse(['C', 'M', 'O'], 1, 0)).toBe(true);
  expect(catAndMouse(['O', 'M', 'C'], 1, 0)).toBe(true);
  expect(catAndMouse(['C', 'M', 'X', 'O'], 1, 0)).toBe(true);
  expect(catAndMouse(['O', 'X', 'M', 'C'], 1, 0)).toBe(true);
  expect(catAndMouse(['C', 'M', 'X', 'O'], 2, 1)).toBe(true);
  expect(catAndMouse(['O', 'X', 'M', 'C'], 2, 1)).toBe(true);
  expect(catAndMouse(['C', 'O', 'M'], 2, 0)).toBe(true);
  expect(catAndMouse(['M', 'O', 'C'], 2, 0)).toBe(true);
  expect(catAndMouse(['C', 'X', 'O', 'X', 'M'], 4, 0)).toBe(true);
  expect(catAndMouse(['M', 'X', 'O', 'X', 'C'], 4, 0)).toBe(true);
  expect(catAndMouse(['C', 'X', 'O', 'X', 'M'], 3, 1)).toBe(true);
  expect(catAndMouse(['M', 'X', 'O', 'X', 'C'], 3, 1)).toBe(true);
});
