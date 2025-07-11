// Задание 4 

let a = 1;
let a1 = 0;
let a2 = -3;

if (a > 0) {
    console.log('true');
} else {
    console.log('false');
}

if (a1 > 0) {
    console.log('true');
} else {
    console.log('false');
}

if (a2 > 0) {
    console.log('true');
} else {
    console.log('false');
}

// Задание 5

{
    let a = 10;
    let b = 2;
    let sum = a + b;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);

    if (sum > 1) {
    console.log(sum ** 2);
    }   
}

// Задание 6

{
    let a = 10;
    let b = 2;
    
    if (a > 2 && 
        a < 11 ||
        b >= 6 &&
        b < 14) {
    console.log('true');
    } else {
        console.log('false');
    }
}

// Задание 7

let n = prompt('Введите число от 0 до 59:');

if (n >=0 && n <= 14){
    console.log('1-я четверть часа');
    }

if (n >=15 && n <= 29) {
    console.log('2-я четверть часа');
    }

if (n >=30 && n <= 44){
    console.log('3-я четверть часа');
    }

if (n >=45 && n <= 59){
    console.log('4-я четверть часа');
    }


// Задание 8

let day = prompt('Введите число от 1 до 31:');

if (day >=1 && day <= 10) {
    console.log('1-я декада месяца');
    }

if (day >=11 && day <= 20) {
    console.log('2-я декада месяца');
    }

if (day >=21 && day <= 31) {
    console.log('3-я декада месяца');
    }


// Задание 9

function daysToYears(days) {
    return Math.round(days / 365);
}

let days = 365;
let years = daysToYears(days);

console.log(days + ' дней это ' + years + ' год');


function daysToMonths(days1) {
    return Math.round(days1 / 31);
}

let days1 = 31;
let months = daysToMonths(days1);

console.log(days1 + ' день это ' + months + ' месяц');


function daysToWeeks(days2) {
    return Math.round(days2 / 7);
}

let days2 = 7;
let weeks = daysToWeeks(days2);

console.log(days2 + ' дней в ' + months + ' неделе');

function daysToHours(days3) {
    return Math.round(days3 * 24);
}

let days3 = 1;
let hours = daysToHours(days3);

console.log('В '+ days3 + ' дне ' + hours + ' часа');

function daysToMinutes(days4) {
    return Math.round(days4 * 1440);
}

let days4 = 1;
let minutes = daysToMinutes(days4);

console.log('В '+ days4 + ' дне ' + minutes + ' минут');

function daysToSeconds(days5) {
    return Math.round(days5 * 86400);
}

let days5 = 1;
let seconds = daysToSeconds(days5);

console.log('В '+ days4 + ' дне ' + seconds + ' секунд');


// Задание 10
