'use strict';
let money = 40000;
let income = 'репетиторство';
let addExpenses = ("интернет, Дорога, комуналка, Еда");
let deposit = true;
let mission = 100000;
let period = 12;

function showTypeOf(a) {
    return typeof a;
}
console.log(showTypeOf(money), showTypeOf(income), showTypeOf(deposit));

let budgetDay = (money / 30);
console.log(budgetDay);

money = prompt('Ваш месячный доход?', '50000');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').toLowerCase().split(', ');
console.log(addExpenses);
deposit = confirm('Есть ли у вас депозит в банке?');


let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = prompt('Во сколько это обойдется?');

let sumAmont = function(amount1, amount2) {
    return +amount1 + +amount2;
}
let getExpensesMonth = function(sumAmont) {
    return sumAmont;
}
console.log('Обязательные расходы: ' + getExpensesMonth(sumAmont));

let getAccumulatedMonth = function(money, amount1, amount2) {
    return (money - (+amount1 + (+amount2)));
}

let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);
console.log('Остаток за месяц: ' + accumulatedMonth);

let getTargetMonth = function(mission, accumulatedMonth) {
    return Math.ceil(mission / accumulatedMonth);
}
console.log('Цель будет достигнута за ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');

let getBudgetDay = function(accumulatedMonth) {
    return Math.floor(accumulatedMonth / 30);
}
let BudgetDay = getBudgetDay(accumulatedMonth);
console.log('BudgetDay ' + BudgetDay + 'р.');

let getStatusIncome = function(income) {
    return income;
}
console.log(getStatusIncome(income));

if (budgetDay > 1200) {
    alert('У вас высокий уровень дохода');
} else if (600 <= budgetDay <= 1200) {
    alert('У вас средний уровень дохода');
} else if (budgetDay < 600) {
    alert('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay <= 0) {
    alert('Что то пошло не так');
}