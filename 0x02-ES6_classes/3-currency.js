export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string' || typeof name === 'string') {
      this._code = code;
      this._name = name;
    } else {
      throw new TypeError();
    }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name}(${this._code})`;
  }
}
