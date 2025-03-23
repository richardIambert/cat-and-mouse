/*
  =================================
  Challenge 1 - Problem Statement
  =================================

  You will be given an array of strings representing the positions of a 'C' and a 'M'. 
  The array may also contain spaces, represented by 'X', and walls, represented by 'W'.
  You will also be given a positive integer representing how far the cat can jump.

  Your task is to calculate if the cat can jump far enough to catch the mouse. 

  Each space, 'X', costs the cat 1 move, and each wall, 'W', costs 2. 
  It doesn't matter if the cat is before or after the mouse in the array.

  E.g. calculateJump(['C', 'W', 'M'], 5) => true
*/

/**
 *
 * @param {string[]} positions
 * @param {number} catMoves
 * @returns {boolean}
 */
const catAndMouse = (positions, catMoves) => {
  // Find the positions of cat and mouse.
  const catPos = positions.indexOf('C');
  const mousePos = positions.indexOf('M');
  // Check if positions contains both cat and mouse.
  if (catPos === -1 || mousePos === -1) return false;
  // Find the path from cat to mouse.
  // ['C', 'X', 'W', 'X', 'M'] -> ['X', 'W', 'X', 'M']
  const pathToMouse = positions.slice(Math.min(catPos, mousePos), Math.max(catPos, mousePos));
  // Find the path cost from cat to mouse.
  // ['X', 'W', 'X', 'M'] -> [1, 2, 1, 1] -> 5
  const pathCost = pathToMouse.reduce((cost, step) => (cost += step === 'W' ? 2 : 1), 0);
  // Return whether cat can close the distance.
  return catMoves >= pathCost;
};

export default catAndMouse;
