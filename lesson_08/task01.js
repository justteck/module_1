'use strict';

const generateArray = (length) => {
  const arrayLength = length;
  const resultArray = [];

  for (let i = 0; i < arrayLength; i += 1) {
    const arrayItem = Math.round(Math.random() * 100);
    resultArray.push(arrayItem);
  }

  return resultArray;
}

console.log(generateArray(6));

