'use strict';

const getLeapYears = (a, b) => {
  let start = (a < b) ? a : b;
  const finish = (a > b) ? a : b;
  const yearsArray = [];

  do {
    if (!(start % 4)) {
      yearsArray.push(start);
      start += 4;
    } else {
      start += 1;
    }
  } while (finish >= start);

  if (b > a) {
    return yearsArray
  } else {
    return yearsArray.reverse();
  }
}

console.log(getLeapYears(40,-41));