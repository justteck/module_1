'use strict';

const addPrefix = (array, prefix) => {
  const cloneArray = array;
  const stringPrefix = String(prefix);

  const resultArray = cloneArray.map((name) => name = `${stringPrefix} ${name}`);

  return resultArray;
};

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'));
