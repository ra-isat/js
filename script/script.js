'use strict';
let money = 40000;
let income = 10000;
let addExpenses = ("интернет, Дорога, комуналка, Еда");
let deposit = true;
let mission = 100000;
let period = 12;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

addExpenses.toLowerCase();
console.log(addExpenses.split(', '));


let budgetDay = (money / 30);
console.log(budgetDay);

money = prompt('Ваш месячный доход?', '50000');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую')
addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
console.log(addExpense);

deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов?');
console.log(expenses1);
let amount1 = prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов?');
console.log(expenses2);
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = (money - (+amount1 + (+amount2)));

console.log(budgetMonth);
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');

budgetDay = Math.floor(budgetMonth / 30);
console.log('За день я могу потратить ' + budgetDay + 'р.');

if (budgetDay > 1200) {
    alert('У вас высокий уровень дохода');
} else if (600 <= budgetDay <= 1200) {
    alert('У вас средний уровень дохода');
} else if (budgetDay < 600) {
    alert('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay <= 0) {
    alert('Что то пошло не так');
}