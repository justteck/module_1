'use strict';

const getAverageValue = (array) => {
  const cloneArray = array;

  const averReceipt = Math.floor((cloneArray.reduce((acc, current) => acc + current, 0) / cloneArray.length));

  return averReceipt;
};

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log('Средний чек: ', getAverageValue(allСashbox));