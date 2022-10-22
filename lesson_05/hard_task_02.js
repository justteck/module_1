'use strict';

// const a = +prompt('Введите первое число', 5);
// const b = +prompt('Введите второе число', 5);

const findMaxNumber = (firstNum, secondNum) => {
  const a = firstNum;
  const b = secondNum;

  return (Number(a > b) * a) + (Number(b > a) * b);
};

console.log('Большее число: ', findMaxNumber(101, 222));