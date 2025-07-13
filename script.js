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
    
    if (a > 2 && a < 11 || b >= 6 && b < 14) {
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

let days = prompt('Введите количество дней');
let daysNum = Number(days);
let years = daysNum / 365;
let months = daysNum / 31;
let weeks = daysNum / 7;
let hours = daysNum * 24;
let minutes = hours * 60;
let seconds = minutes * 60;

    if (years >= 1) {
        console.log(years + 'год');
    } else {
        console.log("Меньше года");
    }

    if (months >= 1) {
        console.log(months + ' месяцев');
    } else {
        console.log("Меньше месяца");
    }

    if (weeks >= 1) {
        console.log(weeks + ' недель');
    } else {
        console.log("Меньше недели");
    }

console.log(hours + ' часов');
console.log(minutes + ' минут');
console.log(seconds + ' секунд');

// Задание 10
