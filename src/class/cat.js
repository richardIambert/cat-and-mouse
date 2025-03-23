import { Animal } from '.';

class Cat extends Animal {
  constructor(moves, position, environment, target) {
    super(moves, position, environment, target);
  }

  static catFromGarden(environment, moves) {
    return environment.reduce((acc, cur, idx, arr) => (cur === 'C' ? new Cat(moves, idx, arr, 'M') : acc), null);
  }

  toString() {
    return `Cat: I'm at position ${this._position} and moving ${this._directionAsString} towards ${this._target}. I have ${this._moves} moves left.`;
  }

  reachedMouse(mousePosition) {
    return this._position === mousePosition;
  }
}

export default Cat;
