import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || !(currency instanceof Currency)) {
      throw new Error();
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
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, convertionRate) {
    if (typeof amount !== 'number' || typeof convertionRate !== 'number') {
      throw new Error();
    }
    return amount * convertionRate;
  }
}
