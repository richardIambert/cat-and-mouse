class Hole {
  _position = 0;

  constructor(position) {
    this._position = position;
  }

  static holesFromGarden(garden) {
    return garden.reduce((acc, cur, idx) => (cur === 'O' ? [...acc, new Hole(idx)] : acc), []);
  }
}

export default Hole;
