/*
  =================================
  Challenge 3 - Problem Statement
  =================================

  You will be given an array containing the positions of a cat, multiple mice, and multiple hiding holes for the mice.
  The cat is represented by the string 'cat', mice by the string 'mouse', and hiding holes 'O'.
  You will also be given an integer representing how far the cat can jump, and a second representing how far the mice can move.

  Your task is to determine if the cat can catch any of the mice. 

  Each space 'x' costs the cat and each mouse one move.
  The cat and mice move simultaneously, so the cat has to catch a mouse before it moves over a hole.

  E.g. calculateJump(['cat', 'mouse', 'x', 'O'], 5, 1) => true
  E.g. calculateJump(['cat', 'x', 'x', 'O', 'mouse'], 5, 1) => false
  E.g. calculateJump(['cat', 'x', 'x', 'O', 'x', 'x', 'mouse'], 5, 1) => true
  E.g. calculateJump(['cat', 'O', 'x', 'x', 'mouse'], 5, 3) => true
  
  Assumptions:
    - The cat will always go for nearest mouse.
    - The mice will always move towards their nearest hole.
    - A mouse will continue to move towards its nearest hole even if the cat has blocked it.
    - A simultaneous move is taken to mean the cat and each mouse moves a single space towards their target at the same time, whilst they have moves remaining.
    - If a mouse reaches a hole and the cat reaches the mouse in the same move cycle, the mouse escapes.
*/

import { Cat, Mouse, Hole } from './class';

const catAndMouse = (garden, catMoves, mouseMoves) => {
  // Create cat, mouse, and hole objects form garden.
  const cat = Cat.catFromGarden(garden, catMoves);
  const mice = Mouse.miceFromGarden(garden, mouseMoves);
  const holes = Hole.holesFromGarden(garden);
  // Check if at least one cat, mouse, and hole exist.
  if (!cat || mice.length === 0 || holes.length === 0) return false;

  // Calculate the maximum number of moves.
  let maxMoves = Math.max(catMoves, mouseMoves);

  // While cat or mice have moves to make...
  while (maxMoves > 0) {
    cat.move(); // ... the cat moves towards its closest mouse ...
    for (const mouse of mice) {
      mouse.move(); // ... each mouse moves towards its closest hole ...
      // When the cat and mice have moved, check if the cat caught a mouse.
      if (cat.reachedMouse(mouse.getPosition()) && !mouse.hasEscaped()) return true;
    }
    maxMoves--;
  }
  return false; // The cat didn't catch any mice.
};

export default catAndMouse;
