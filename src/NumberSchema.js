const isNumber = (testObj) => typeof testObj === 'number';

const isEven = (testObj) => testObj % 2 === 0;

const isOdd = (testObj) => testObj % 2 === 1;

export default class NumberSchema {
  constructor(checks = [isNumber]) {
    this.checks = checks;
  }

  even() {
    return new NumberSchema([...this.checks, isEven]);
  }

  odd() {
    return new NumberSchema([...this.checks, isOdd]);
  }

  isValid(testObj) {
    return this.checks.reduce((acc, check) => acc && check(testObj), true);
  }
}
