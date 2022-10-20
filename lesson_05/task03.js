'use strict';

const reverseString = (str) => {
  const resStr = str.split('').reverse().join('');
  return resStr;
}

console.log(reverseString('привет Мир'));