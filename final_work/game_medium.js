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

  const game = () => {
    let playerPoints = 5;
    let botPoints = 5;

    const maxPoints = 10;
    const minPoints = 0;

    let isPlayersTurn = true;

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
      alert(`Вы: ${playerPoints} - Бот: ${botPoints}`);

      if (playerPoints <= 0) {
        alert('Вы проиграли =(');
        return;
      }

      if (botPoints <= 0) {
        alert('Вы выиграли =)');
        return;
      }

      if (isPlayersTurn) {
        let playerBet = prompt('Загадайте число и введите в строку:');
        const botGuessOdd = isOdd(getRandomIntInclusive(1, 2));

        console.log('playerBet: ', playerBet);
        console.log('botGuessOdd: ', botGuessOdd);

        if (playerBet === null) {
          alert('Пока!');
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
          } else {
            botPoints = addPointsToPlayer(playerBet, botPoints);
            playerPoints = subtractPointsFromPlayer(playerBet, playerPoints);
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
        } else {
          playerPoints = addPointsToPlayer(botBet, playerPoints);
          botPoints = subtractPointsFromPlayer(botBet, botPoints);
        }

        isPlayersTurn = true;
        return play();
      }
    };
  };

  window.playMarbles = game;
})();
