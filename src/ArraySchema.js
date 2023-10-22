const isArray = (testObj) => testObj instanceof Array;

const isLength = (testObj, arrayLength) => testObj.length === arrayLength;

export default class ArraySchema {
  constructor(checks = [isArray]) {
    this.checks = checks;
  }

  length(arrayLength) {
    return new ArraySchema([...this.checks, (testObj) => isLength(testObj, arrayLength)]);
  }

  isValid(testObj) {
    return this.checks.reduce((acc, check) => acc && check(testObj), true);
  }
}
