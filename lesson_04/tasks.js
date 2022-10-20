// 2 task
const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}

// 3 task
const mathPoints= +prompt('Введите кол-во баллов по математике:', 50);
const rusPoints= +prompt('Введите кол-во баллов по русскому языку:', 50);
const infPoints= +prompt('Введите кол-во баллов по информатике:', 50);
const totalPoints = mathPoints + rusPoints + infPoints;

// Можно написать проверку на введенный тип данных, но по условию этого не требовалось
if (totalPoints >= 256) {
  console.log('Поздравляю, вы поступили на бюджет!');
}

// 4 task
const money = +prompt('Введите сумму для снятия: ', 500);

if (money % 100 === 0) {
  console.log('Вы можете снять деньги');
} else {
  console.log('Сумма должна быть кратна 100');
}
