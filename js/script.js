'use strict'

let money = 10000,
    income = "Copyrighting",
    addExpenses = "Dog, Car, Courses",
    deposit = false,
    mission = 200000,
    period = 5,
    budgetDay = money / 30;

console.log(typeof money, typeof income, typeof deposit, typeof budgetDay, budgetDay, income.length, money % 30);

console.log(addExpenses.toLocaleLowerCase().split(', '));

console.log('Earn ' + mission + ' Dollar');
console.log('During ' + period + ' month');