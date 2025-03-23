/*
  =================================
  Challenge 0 - Problem Statement
  =================================

  You will be given an array containing string representations of the locations of a cat and a mouse. 
  You will also be given a positive integer which represents how far the cat can jump.

  Your task is to calculate if the cat can jump far enough to catch the mouse. Each space 'X' in the array expends 1 from the cat's movement.
  It does not matter if the cat is before or after the mouse in the array.

  E.g. catAndMouse(['C', 'M'], 5) => true
*/

/**
 *
 * @param {string[]} positions
 * @param {number} catMoves
 * @returns {boolean}
 */
const catAndMouse = (positions, catMoves) => {
  // Find the positions of cat and mouse.
  const catLocation = positions.indexOf('C');
  const mouseLocation = positions.indexOf('M');
  // Check if positions contains both cat and mouse.
  if (catLocation === -1 || mouseLocation === -1) return false;
  // Find the distance between cat and mouse.
  const catMouseDistance = Math.abs(catLocation - mouseLocation);
  // Return whether cat can close the distance.
  return catMoves >= catMouseDistance;
};

export default catAndMouse;
