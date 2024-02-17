// _____Problem_1_____

let password = 'Пароль';
let userPass = prompt('Введите пароль');
(userPass === password) ? alert('Пароль верный') : alert('Пароль неверный');


// _____Problem_2_____

let c = prompt('Введите число');
let isOK = (c > 0 && c < 10) ? 'Верно' : 'Неверно';
console.log(isOK);


// _____Problem_3_____

let d = prompt('Введите число');
let e = prompt('Введите число');
(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

// _____Problem_4_____

let a = '2';
let b = '3';
alert(Number(a) + Number(b));


// _____Problem_5_____

let monthNumber = Number(prompt('Введите число месяца'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    default:
        console.log('Ты шо такое пишешь?');
        break;
}

// _____***Problem_7***_____

let num = Number(prompt('Введите любое число'));
if(isNaN(num)) {
    alert('Введите корректное число!')
} else {
    if (num % 2 == 0) {
        alert('Число чётное');
    } else {
        alert('Число нечётное');
    }
}

// _____***Problem_8***_____

let isAndroid = confirm('Вы пользуетесь Android?');
(isAndroid === true) ? alert('Установите версию приложения для Android по ссылке') : alert('Установите версию приложения для iOS по ссылке');


// _____***Problem_9***_____

let clientDeviceYear = prompt('Введите год выпуска Вашего телефона');
let isItAndroid = confirm('Вы пользуетесь Android?');
if(isAndroid === true && clientDeviceYear >= 2015) {
    alert('Установите версию приложения для Android по ссылке');
} else if (isItAndroid === false && clientDeviceYear >= 2015) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (isItAndroid === true && clientDeviceYear < 2015) {
    alert('Установите облегченную версию приложения для Android по ссылке');
} else {
    alert('Установите облегченную версию приложения для iOS по ссылке');
}