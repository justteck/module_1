'use strict';

const getDivisors = (number) => {
  const a = number;
  const divisorsArr = [];

  for (let i = a; i !== 0; i -= 1) {
    if (a % i === 0) {
      divisorsArr.push(i);
    }
  }

  return divisorsArr;
}

const calcMaxDivisor = (firstNum, secondNum) => {
  const a = getDivisors(firstNum);
  const b = getDivisors(secondNum);

  if (a.length > b.length) {
    return a.find((item) => b.includes(item));
  } else {
    return b.find((item) => a.includes(item));
  }
}

// calcMaxDivisor(12, 18);
console.log('Наибольший общий делитель двух чисел: ', calcMaxDivisor(131, 18));