export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error();
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  /* eslint-enable class-methods-use-this */
}
