'use strict';

const convertToRub = (eur) => {
  const dollar = eur * 1.2;
  const rub = dollar * 64;
  return rub;
}

console.log(convertToRub(2));