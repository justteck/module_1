'use strict';

const isPrime = (n) => {
  const number = n;
  let counter = 0;

  for (let i = 2; i <= number; i += 1) {
    if (!(number % i)) {
      counter += 1;
    }
  }

  return counter > 1 ? false : true;
}

console.log(isPrime(131));