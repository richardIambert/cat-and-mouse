import { Animal } from '.';

class Mouse extends Animal {
  constructor(moves, position, environment, target) {
    super(moves, position, environment, target);
  }

  static miceFromGarden(garden, moves) {
    return garden.reduce((acc, cur, idx, arr) => (cur === 'M' ? [...acc, new Mouse(moves, idx, arr, 'O')] : acc), []);
  }

  toString() {
    return `Mouse: I'm at position ${this._position} and moving ${this._directionAsString} towards ${this._target}. I have ${this._moves} moves left.`;
  }

  hasEscaped() {
    return this._environment[this._position] === this._target;
  }
}

export default Mouse;
