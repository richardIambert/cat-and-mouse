/*
  =================================
  Challenge 2 - Problem Statement
  =================================

  You will be given an array containing string representations of the locations of a cat and multiple mice. 
  You will also be given a positive integer which represents how far the cat can jump.

  Your task is to calculate how many, if any, mice can the cat catch in one jump. 

  Each space 'X' expends 1 of the cat's movement. 
  The cat will always go for the highest number of mice it can catch if there are mice before and after it in the array.

  E.g. catAndMouse(['C', 'X', 'M'], 5) => 1
*/

const catAndMouse = (positions, catMoves) => {
  // Find the positions of cat and first mouse.
  const catPos = positions.indexOf('C');
  const mousePos = positions.indexOf('M');
  // Check if positions contains both cat and mouse.
  if (catPos === -1 || mousePos === -1) return 0;
  // Find how many mice the cat can catch to its left and right.
  const leftStart = catPos - catMoves >= 0 ? catPos - catMoves : 0;
  const miceToLeft = positions.slice(leftStart, catPos).filter((position) => position === 'M').length;
  const rightEnd = catPos + catMoves + 1;
  const miceToRight = positions.slice(catPos, rightEnd).filter((position) => position === 'M').length;
  // Return bigger catch of mice.
  return Math.max(miceToLeft, miceToRight);
};

export default catAndMouse;
