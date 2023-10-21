import { isNumber } from './NumberSchema.js';

export default class Validator {
  constructor(checks = []) {
    this.checks = checks;
  }

  number() {
    return new Validator([...this.checks, isNumber]);
  }

  isValid(testObj) {
    return this.checks.reduce((acc, check) => acc && check(testObj), true);
  }
}
