'use strict';

// Проверка, ввел ли пользователь число
const checkStringNumber = (str) => {
  if (str === '' || Number.isNaN(+str)) {
    return false;
  } else return true;
};

// Проверка на нажатие отмены при вводе
const isEnteredNull = (num) => {
  if (num === null) {
    return true;
  } else return false;
};

const createNumber = (str) => {
  let number = prompt(str, 0);

  if (!isEnteredNull(number)) {
    if (checkStringNumber(number)) {
      number = +number;

      return number;
    } else {
      alert('Введите число!');
      return createNumber(str);
    }
  } else return null;
};

const playTheGame = (attempts, numbersArray, guessedNumber) => {
  alert(`Количество попыток: ${attempts} `);
  const number = createNumber('Введите число: ');

  if (number !== null) {
    const numbersRepeat = numbersArray.includes(number);

    if (numbersRepeat) {
      alert('Вы уже вводили такое число');
      playTheGame(attempts, numbersArray, guessedNumber);
    } else {
      numbersArray.push(number);

      if (number === guessedNumber) {
        alert('Верно! Вы выиграли!');
      } else if (number > guessedNumber) {
        alert('Искомое число меньше!');
        attempts -= 1;
        playTheGame(attempts, numbersArray, guessedNumber);
      } else {
        alert('Искомое число больше!');
        attempts -= 1;
        playTheGame(attempts, numbersArray, guessedNumber);
      }
    }
  }
};

// Игра
const game = () => {
  let start = createNumber('Введите начало диапазона: ');
  let finish = createNumber('Введите конец диапазона: ');

  if (start !== null && finish !== null) {
    if (finish < start) {
      [start, finish] = [finish, start];
    }

    const guessedNumber =
      Math.floor(Math.random() * (finish - start + 1) + start);

    console.log('guessed: ', guessedNumber);

    const attempts = Math.ceil((finish - start) * 0.3);
    const numbersArray = [];

    playTheGame(attempts, numbersArray, guessedNumber);
  }
  alert('Пока-пока!');
};

game();
