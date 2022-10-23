'use strict';

const checkNumber = (num) => {
  const number = num;

  if (number === '' || Number.isNaN(+number)) {
    return false;
  } else return true;
}


const game = () => {
  const guessedNumber = Math.floor(Math.random() * 101);
  console.log('Bot number --------------------------------------------------: ', guessedNumber);
  
  while(true) {
    let number = prompt('Введите число:', 34);

    if (number !== null) {
      if (checkNumber(number)) {
        number = +number;
        if (number === guessedNumber) {
          alert('Верно!');
          break;
        } else if (number < guessedNumber) {
          alert('Искомое число больше');
          continue;
        } else {
          alert('Искомое число меньше');
          continue;
        }
      } else {
        alert('Введите число');
        continue;
      }
    } else break;
  }

  alert('Пока-пока!');
}

game();