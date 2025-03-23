class Animal {
  _moves = 0;
  _position = 0;
  _direction = 0;
  _directionAsString = 0;
  _environment = null;
  _target = '';

  constructor(moves, position, environment, target) {
    this._moves = moves;
    this._position = position;
    this._environment = environment;
    this._target = target;
    this._setDirection();
  }

  getPosition() {
    return this._position;
  }

  getTarget() {
    return this._target;
  }

  getDirection() {
    return this._direction;
  }

  getDirectionAsString() {
    return this._directionAsString;
  }

  _setDirection() {
    const pathLeft = this._environment.slice(0, this._position);
    const targetLeftPosition = pathLeft.lastIndexOf(this._target);
    const targetLeftDistance = targetLeftPosition === -1 ? Infinity : pathLeft.length - targetLeftPosition;
    const pathRight = this._environment.slice(this._position + 1, this._environment.length);
    const targetRightPosition = pathRight.indexOf(this._target);
    const targetRightDistance = targetRightPosition === -1 ? Infinity : targetRightPosition + 1;
    this._direction = targetLeftDistance >= targetRightDistance ? 1 : -1;
    this._directionAsString = this._direction === -1 ? 'left' : 'right';
  }

  move() {
    if (this._moves > 0) {
      this._position += this._direction;
      this._moves--;
    }
  }
}

export default Animal;
