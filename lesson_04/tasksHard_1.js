// 1 task

const salary = +prompt('Введите вашу зарплату: ', 20000);

if (salary <= 15000) {
  console.log(`Налог составит: ${Number((salary * 0.13).toFixed(2))}`);
} else if (salary > 15000 && salary <= 50000) {
  console.log(`Налог составит: ${Number((salary * 0.2).toFixed(2))}`);
} else if(salary > 50000) {
  console.log(`Налог составит: ${Number((salary * 0.3).toFixed(2))}`);
}