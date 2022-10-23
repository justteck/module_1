'use strict';

const generateArray = (length, min, max) => {
  const arrayLength = length;
  const arrayMin = min;
  const arrayMax = max;
  const resultArray = [];

  for (let i = 0; i < arrayLength; i += 1) {
    const arrayItem = Math.ceil(Math.random() * (arrayMax - arrayMin) + arrayMin);
    resultArray.push(arrayItem);
  }

  return resultArray;
}

console.log(generateArray(6, 10, 44));