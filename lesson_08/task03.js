'use strict';

const getOddOrEven = (array, str) => {
  const oddOrEven = str;

  const resultArray = array.filter((number) => {
    if (oddOrEven === 'odd') {
      return !(number % 2);
    } else if (oddOrEven === 'even') {
      return number % 2;
    }
  });

  return resultArray;
}

const generateArray = (length, min, max, str) => {
  const arrayLength = length;
  const arrayMin = min;
  const arrayMax = max;
  const oddOrEven = str;
  const resultArray = [];

  for (let i = 0; i < arrayLength; i += 1) {
    const arrayItem = Math.ceil(Math.random() * (arrayMax - arrayMin) + arrayMin);
    resultArray.push(arrayItem);
  }

  return getOddOrEven(resultArray, oddOrEven);
}

console.log(generateArray(14, 10, 44, 'odd'));