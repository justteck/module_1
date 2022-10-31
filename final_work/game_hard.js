'use strict';

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

  const rockPapperScissors = () => {
    const results = {
      computerScore: 0,
      playerScore: 0,
    };

    const FIGURES = ['камень', 'ножницы', 'бумага'];

    const options = {
      'кк': 'draw',
      'бб': 'draw',
      'нн': 'draw',

      'нб': 'win',
      'кн': 'win',
      'бк': 'win',

      'бн': 'lose',
      'нк': 'lose',
      'кб': 'lose',
    };

    const langData = {
      computerScore: 0,
      playerScore: 0,
      enter: `Камень, ножницы или бумага?\nПобедитель ходит первым.`,
      exitConfirm: 'Вы уверены?',
      more: 'Еще?',
      // Почему тут не работает без геттеров и сеттеров?
      // getWin: `test ${this.computerScore}`,
      // getWin1: `test ${ru.computerScore}`,
      // getWin2: `test ${computerScore}`,

      get getScore() {
        return `Вы: ${this.playerScore}\n
        Компьютер: ${this.computerScore}`;
      },

      get getWin() {
        return `Вы выиграли! Вы ходите в первым!\n
        ${this.getScore}`;
      },

      get getLose() {
        return `Вы проиграли! Бот ходит первым!\n
        ${this.getScore}`;
      },

      get getDraw() {
        return `Ничья!\n
        ${this.getScore}`;
      },
    };

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

    return function play() {
      const playerFigure = (prompt(langData.enter));
      const computerFigure = FIGURES[getRandomIntInclusive(0, 2)];

      if (playerFigure === null) {
        if (confirm(langData.exitConfirm)) {
          return null;
        } else return play();
      }

      if (!isStrCorrect(playerFigure, FIGURES)()) {
        return play();
      }

      const playerFigureLetter = playerFigure[0];
      const computerFigureLetter = computerFigure[0];
      const optionsKey = playerFigureLetter + computerFigureLetter;

      if (options[optionsKey]) {
        switch (options[optionsKey]) {
          case 'win':
            results.playerScore += 1;
            langData.playerScore = results.playerScore;
            alert(langData.getWin);
            return true;

          case 'lose':
            results.computerScore += 1;
            langData.computerScore = results.computerScore;
            alert(langData.getLose);
            return false;

          case 'draw':
            alert(langData.getDraw);
            if (confirm(langData.more)) {
              return play();
            } else return null;
        }
      }
    };
  };

  const marblesGame = () => {
    let playerPoints = 5;
    let botPoints = 5;

    const maxPoints = 10;
    const minPoints = 0;

    let isPlayersTurn = rockPapperScissors()();

    const setDefaultPoints = () => {
      playerPoints = 5;
      botPoints = 5;
    };
    // Проверяем ставку игрока. Не меньше 0, не больше, чем имеется очков
    const isBetCorrect = (number) => {
      if ((number > playerPoints || number <= 0)) {
        return false;
      } return true;
    };

    const addPointsToPlayer = (bet, playerPoints) => {
      playerPoints = (playerPoints + bet > maxPoints) ?
      maxPoints : playerPoints + bet;

      return playerPoints;
    };

    const subtractPointsFromPlayer = (bet, playerPoints) => {
      playerPoints = (playerPoints - bet < minPoints) ?
      minPoints : playerPoints - bet;

      return playerPoints;
    };

    // Игра
    return function play() {
      if (isPlayersTurn === null) {
        alert('Вы не захотели играть. Пока-пока!');
        return;
      }

      alert(`Марблс. Ваши баллы: \nВы [${playerPoints}] - Бот [${botPoints}]`);

      if (playerPoints <= 0) {
        alert('Вы проиграли =(');
        if (confirm('Еще партию?')) {
          setDefaultPoints();
          isPlayersTurn = rockPapperScissors()();
          return play();
        }
        return;
      }

      if (botPoints <= 0) {
        alert('Вы выиграли =)');
        if (confirm('Еще партию?')) {
          setDefaultPoints();
          isPlayersTurn = rockPapperScissors()();
          return play();
        }
        return;
      }

      if (isPlayersTurn) {
        let playerBet = prompt(`Загадайте число
от 1 до ${playerPoints} и введите в строку:`);
        const botGuessOdd = isOdd(getRandomIntInclusive(1, 2));

        console.log('playerBet: ', playerBet);
        console.log('botGuessOdd: ', botGuessOdd);

        if (playerBet === null) {
          alert('Вы вышли из игры. Пока!');
          return;
        }

        if (Number.isNaN(+playerBet)) {
          alert('Вы ввели не число!');

          return play();
        } else {
          playerBet = +playerBet;
        }

        if (isBetCorrect(playerBet)) {
          if (botGuessOdd !== isOdd(playerBet)) {
            playerPoints = addPointsToPlayer(playerBet, playerPoints);
            botPoints = subtractPointsFromPlayer(playerBet, botPoints);

            alert(`Вы загадали число: ${playerBet}.
            Предположение бота: ${botGuessOdd ? 'нечетное' : 'четное'}`);
          } else {
            botPoints = addPointsToPlayer(playerBet, botPoints);
            playerPoints = subtractPointsFromPlayer(playerBet, playerPoints);

            alert(`Вы загадали число: ${playerBet}.
            Предположение бота: ${botGuessOdd ? 'нечетное' : 'четное'}`);
          }

          isPlayersTurn = false;
          return play();
        } else {
          alert('Ставка некорректна');

          return play();
        }
      } else {
        const botBet = getRandomIntInclusive(1, botPoints);
        const playerGuessOdd = confirm('Бот загадал нечетное?');

        console.log('botBet: ', botBet);
        console.log('playerGuessOdd: ', playerGuessOdd);

        if (playerGuessOdd !== isOdd(botBet)) {
          botPoints = addPointsToPlayer(botBet, botPoints);
          playerPoints = subtractPointsFromPlayer(botBet, playerPoints);

          alert(`Бот загадал число: ${botBet}.
          Ваше предположение: ${playerGuessOdd ? 'нечетное' : 'четное'}`);
        } else {
          playerPoints = addPointsToPlayer(botBet, playerPoints);
          botPoints = subtractPointsFromPlayer(botBet, botPoints);

          alert(`Бот загадал число: ${botBet}.
          Ваше предположение: ${playerGuessOdd ? 'нечетное' : 'четное'}`);
        }

        isPlayersTurn = true;
        return play();
      }
    };
  };

  window.playMarbles = marblesGame;
})();
