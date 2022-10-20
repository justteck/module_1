'use strict';

const modifyString = (str) => {
  const strCopy = str;

  return (strCopy[0].toUpperCase() + strCopy.slice(1));
}

console.log(modifyString('привет Мир'));