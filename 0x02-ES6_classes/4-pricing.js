import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || !(currency instanceof Currency)) {
      throw new TypeError('Attribute type error');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, convertionRate) {
    if (typeof amount !== 'number' || typeof convertionRate !== 'number') {
      throw new TypeError('Type mismatch');
    }
    return this.amount * this.convertionRate;
  }
}
