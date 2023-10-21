const isNumber = (testObj) => typeof testObj === 'number';

const isEven = (testObj) => testObj % 2 === 0;

const isOdd = (testObj) => testObj % 2 === 1;

export { isNumber, isEven, isOdd };
