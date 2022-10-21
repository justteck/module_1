'use strict';

for (let i = 1; i <= 10; i += 1) {
  console.log('-----------------');
  for (let j = 1; j <= 10; j += 1) {
    console.log(`${i} в степени ${j}:`, i ** j);
  }
}