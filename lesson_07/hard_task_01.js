'use strict';

const getAveragePriceGoods = (array) => {
  const cloneArray = array;
  
  const averageReceipt = (cloneArray.reduce((acc, current) => {
    return acc + (current[1] / current [0]);
  }, 0) / cloneArray.length).toFixed(2);

  return averageReceipt;
}

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

console.log('Средний чек: ', getAveragePriceGoods(allСashbox));