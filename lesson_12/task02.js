'use strict';

const getRecursiveArr = (arr) => {
  const randNum = Math.floor(Math.random() * 11);
  const arrClone = arr;

  if ((arrClone.reduce((acc, current) => acc + current)) > 50) return arrClone;

  arr.push(randNum);

  return getRecursiveArr(arrClone);
};

const array = [1, 3, 4, 7];
console.log(getRecursiveArr(array));
