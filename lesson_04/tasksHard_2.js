// 2 task

const salaryProgr = +prompt('Введите вашу зарплату: ', 20000);
const lowTax = +(15000 * 0.13).toFixed(2);
const middleTax = +((50000 - 15000) * 0.2).toFixed(2);
let resultTax = 0;

if (salaryProgr <= 15000) {

  console.log(`Налог составит: ${Number((salaryProgr * 0.13).toFixed(2))}`);

} else if (salaryProgr > 15000 && salaryProgr <= 50000) {

  resultTax = lowTax + Number(((salaryProgr - 15000) * 0.2).toFixed(2));
  console.log(`Налог составит: ${resultTax}`);

} else if (salaryProgr > 50000) {

  resultTax = lowTax + middleTax + Number(((salaryProgr - 50000) * 0.3).toFixed(2));
  console.log(`Налог составит: ${resultTax}`);
  
}