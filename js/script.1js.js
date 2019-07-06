let money = 10000,
    income = "Copyrighting",
    addExpenses = "Dog, Car, Courses",
    deposit = false,
    mission = 200000,
    period = 5,
    budgetDay = money / 30;

console.log((typeof money, income, deposit));
console.log(length.income);
console.log('Earn ' + mission + ' in' period + ' month');
console.log(budgetDay);

//через if

let lang = ('ru');
if (lang === 'ru') {
    wD = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang === 'en') {
    wD = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(wD);



//через switch-case

let lang = ('ru');
switch (lang) {
    case 'ru':
        weekDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    case 'en':
        weekDay = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
        break;
}
console.log(weekDay);

// многомерный массив

let lang = ('ru');
weekDay = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(weekDay[lang]);

// условие ? выражение1 : выражение2
/*
У нас есть переменная namePerson.
Если значение этой переменной “Артем” то вывести в консоль “директор”,
если значение “Максим” то вывести в консоль “преподаватель”,
с любым другим значением вывести в консоль “студент”
*/

let namePerson = prompt('Ваше имя?');

let status = (namePerson == 'Артем') ? 'директор' :
    (namePerson == 'Максим') ? 'преподаватель' :
    'студент';

console.log(status);
