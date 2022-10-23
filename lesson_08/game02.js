'use strict';

// Проверка, ввел ли пользователь число
const checkStringNumber = (str) => {
  const number = str;

  if (number === '' || Number.isNaN(+number)) {
    return false;
  } else return true;
}

// Проверка на нажатие отмены при вводе
const isEnteredNull = (num) => {
  const number = num;

  if (number === null) {
    return true;
  } else {
    return false;
  } 
}

// Создает число из строки
const createNumber = (str) => {
  while (true) {
    let number = prompt(str , 0);

    if (!isEnteredNull(number)) {
      if (checkStringNumber(number)) {
        number = +number;

        return number;
      } else {
        alert('Введите число!');
        continue;
      }
    } else return null;
  }
}


// Игра
const game = () => {

  let start = createNumber('Введите начало диапазона: ');
  let finish = createNumber('Введите конец диапазона: ');

  if (start !== null && finish !== null) {
    if (finish < start) {
      [start, finish] = [finish, start];
    }

    const guessedNumber = Math.floor(Math.random() * (finish - start) + start);
    console.log('GUESSED - ', guessedNumber);

    let attempts = Math.ceil((finish - start) * 0.3);
    const numbersArray = [];

    while(attempts > 0) {
      alert(`Количество попыток: ${attempts} `);
      let number = createNumber('Введите число: ');
      
      if (number !== null) {
        const numbersRepeat = numbersArray.includes(number);

        if (numbersRepeat) {
          alert('Вы уже вводили такое число');
          continue;
        } else {
          numbersArray.push(number);

          if (number === guessedNumber) {
            alert('Верно! Вы выиграли!');
          } else if (number > guessedNumber) {
            alert('Искомое число меньше!');
            attempts -= 1;
            continue;
          } else {
            alert('Искомое число больше!');
            attempts -= 1;
            continue;
          }
        }
      }
      break;
    }
  }
  alert('Пока-пока!');
}

game();