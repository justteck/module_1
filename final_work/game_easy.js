'use strict';

(function() {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'papper', 'scissors'];
  const options = {
    rr: 'draw',
    pp: 'draw',
    ss: 'draw',

    sp: 'win',
    rs: 'win',
    pr: 'win',

    ps: 'lose',
    sr: 'lose',
    rp: 'lose',
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Проверка соответсвия введенного слова словам из массива.
  // Например "камень". Вводим к - ок, ка - ок, кап - ошибка, каменьвв - ошибка.
  const isStrCorrect = (str, arr) => {
    if (str === '') return () => false;

    let counter = 0;
    const cloneStr = str.toLowerCase();
    let currentArrayStr = '';

    for (const word of arr) {
      if (cloneStr[0] === word[0]) {
        currentArrayStr = word;
      }
    }

    return function wrapper() {
      if (cloneStr.length <= currentArrayStr.length) {
        if (!cloneStr[counter] || !currentArrayStr[counter]) {
          return true;
        } else {
          if (cloneStr[counter] === currentArrayStr[counter]) {
            counter += 1;
            return wrapper();
          }
        }
      } return false;
    };
  };

  const getFirstLetter = (str) => {
    if (/[а-я]/i.test(str)) {
      switch (str[0].toLowerCase()) {
        case 'к': return 'r';
        case 'н': return 's';
        case 'б': return 'p';
      }
    } else return str[0];
  };

  const getLanguageObject = (language) => {
    const ru = {
      computerScore: 0,
      playerScore: 0,
      enter: 'Камень, ножницы или бумага?',
      exitConfirm: 'Вы уверены?',
      more: 'Еще?',
      // Почему тут не работает без геттеров и сеттеров?
      // getWin: `test ${this.computerScore}`,
      // getWin1: `test ${ru.computerScore}`,
      // getWin2: `test ${computerScore}`,

      get getScore() {
        return `Вы: ${this.playerScore}
        Компьютер: ${this.computerScore}`;
      },

      get getWin() {
        return `Вы выиграли!
        ${this.getScore}`;
      },

      get getLose() {
        return `Вы проиграли!
        ${this.getScore}`;
      },

      get getDraw() {
        return `Ничья!
        ${this.getScore}`;
      },

      get getFinalResult() {
        if (this.computerScore > this.playerScore) {
          return `Вы проиграли:
            ${this.getScore}`;
        } else if (this.playerScore > this.computerScore) {
          return `Вы выиграли:
            ${this.getScore}`;
        } else {
          return `Ничья:
            ${this.getScore}`;
        }
      },
    };

    const eng = {
      computerScore: 0,
      playerScore: 0,
      enter: 'Rock, papper or scissors?',
      exitConfirm: 'Are you sure?',
      more: 'More?',

      get getScore() {
        return `You: ${this.playerScore}
        Computer: ${this.computerScore}`;
      },

      get getWin() {
        return `You win!
        ${this.getScore}`;
      },

      get getLose() {
        return `You lose!
        ${this.getScore}`;
      },

      get getDraw() {
        return `Draw!
        ${this.getScore}`;
      },

      get getFinalResult() {
        if (this.computerScore > this.playerScore) {
          return `You lose:
          ${this.getScore}`;
        } else if (this.playerScore > this.computerScore) {
          return `You win:
          ${this.getScore}`;
        } else {
          return `Draw:
          ${this.getScore}`;
        }
      },
    };

    if (language === 'EN' || language === 'ENG') {
      return eng;
    } else return ru;
  };

  const game = (language) => {
    const results = {
      computerScore: 0,
      playerScore: 0,
    };

    const figures = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    const langData = getLanguageObject(language);

    return function play() {
      const playerFigure = (prompt(langData.enter));
      const computerFigure = figures[getRandomIntInclusive(0, 2)];

      if (playerFigure === null) {
        if (confirm(langData.exitConfirm)) {
          alert(langData.getFinalResult);
          return;
        } else play();
      }

      if (!isStrCorrect(playerFigure, figures)()) {
        play();
      }

      const playerFigureLetter = getFirstLetter(playerFigure);
      const computerFigureLetter = getFirstLetter(computerFigure);
      const optionsKey = playerFigureLetter + computerFigureLetter;

      if (options[optionsKey]) {
        switch (options[optionsKey]) {
          case 'win':
            results.playerScore += 1;
            langData.playerScore = results.playerScore;
            alert(langData.getWin);
            if (confirm(langData.more)) {
              play();
            } else {
              alert(langData.getFinalResult);
              return;
            }
            break;

          case 'lose':
            results.computerScore += 1;
            langData.computerScore = results.computerScore;
            alert(langData.getLose);
            if (confirm(langData.more)) {
              play();
            } else {
              alert(langData.getFinalResult);
              return;
            }
            break;

          case 'draw':
            alert(langData.getDraw);
            if (confirm(langData.more)) {
              play();
            } else {
              alert(langData.getFinalResult);
              return;
            }
            break;
        }
      }
    };
  };

  window.rockPapperScissors = game;
})();

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const isOdd = (number) => {
    if (number % 2) {
      return true;
    } else return false;
  };

  const game = () => {
    let botPoints = 5;
    let playerPoints = 5;

    const isBetCorrect = (number) => {
      if ((number > playerPoints || number <= 0)) {
        return false;
      } return true;
    };

    // Игра
    return function play() {
      console.log('Вы', playerPoints);
      console.log('Бот', botPoints);

      if (playerPoints <= 0) {
        alert('Вы проиграли');
        return null;
      }

      if (botPoints <= 0) {
        alert('Вы выиграли');
        return;
      }

      let guessedNum = prompt('Загадайте число и введите в строку:');
      console.log('guessedNum: ', guessedNum);
      const botGuessOdd = isOdd(getRandomIntInclusive(1, 2));
      console.log('botGuessOdd: ', botGuessOdd);

      if (guessedNum === null) {
        alert('Пока!');
        return;
      }

      if (Number.isNaN(+guessedNum)) {
        alert('Вы ввели не число!');
        return play();
      } else {
        guessedNum = +guessedNum;
      }

      if (isBetCorrect(guessedNum)) {
        if (botGuessOdd === isOdd(guessedNum)) {
          botPoints += guessedNum;
          playerPoints -= guessedNum;
          return play();
        } else {
          playerPoints += guessedNum;
          botPoints -= guessedNum;
          return play();
        }
      } else {
        alert('Ставка некорректна');
        return play();
      }
    };
  };

  window.playMarbles = game;
})();
