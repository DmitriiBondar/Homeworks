// _____Problem_1_____

let first = Number(prompt('Найдём меньшее из чисел. Введите 1-е число...'));
let second = Number(prompt('Введите 2-е число...'));
let minNum = function(first, second) {
    if (first < second) {
        console.log(`Первое число меньше. Оно равно ${first}`)
        return first;
    } else if (first === second) {
        console.log(`Чсла равны со значением ${first}`);
        return first;
    } else {
        console.log(`Второе число меньше. Оно равно ${second}`);
        return second;
    }
}
minNum(first, second);


// _____Problem_2_____

let num = Number(prompt('Введите число, проверим его на чётность'));
let isEven = function(x) {
    if (x % 2 == 0) {
        console.log(`Число ${x} чётное`);
        return x;
    } else {
        console.log(`Число ${x} нечётное`);
        return x;
    }
}
isEven(num);


// _____Problem_3_____

let numb = Number(prompt('Возведём в степень число...'));
let exponentiation = function(x) {
    x **= 2;
    console.log(`Получим ${x}`);
    return x;
}
let expNum = exponentiation(numb);
// В дальнейшем можем пользоваться переменной expNum


// _____Problem_4_____

let years = Number(prompt('Сколько вам лет?'));
let isYoung = function(x) {
    if (x < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (x >= 0 && x <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}
isYoung(years);


// _____Problem_5_____

let num1 = Number(prompt('Перемножим два числа. Первое:'));
let num2 = Number(prompt('Второе:'));
let mult = function(x, y) {
    if (isNaN(x) || isNaN(y)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        let z = x * y;
        console.log(`Произведение чисел равно ${z}`);
        return z;
    }
}

mult(num1, num2);


// _____Problem_6_____

let number = Number(prompt('Возведём число в 3-ю степень'));
let cube = function(x) {
    if (isNaN(x)) {
        console.log('Переданный параметр не является числом');
    } else {
        let z = x ** 3;
        console.log(`${x} в кубе равно ${z}`);
        return z;
    }
}
mult(number);


// _____Problem_7_____

const circle = function() {
    let perimetr = 2 * Math.PI * this.radius;
    console.log('Периметр окружности равен ' + Math.round(perimetr));

    let area = Math.PI * this.radius ** 2;
    console.log('Площадь круга равна ' + Math.round(area));
}

let circle1 = {
    radius: 3,
    circle: circle,
}
let circle2 = {
    radius: 5,
    circle: circle,
}

circle1.circle();
circle2.circle();


// _____Problem_8_____

let mounthGame = function(el) {
    // el.innerHTML = "Let's go!";
    el.style.background = '#008282';
    el.style.color = 'black';

    let monthNumber = Number(prompt('Введите число месяца'));
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Winter');
            break;
        case 3:
        case 4:
        case 5:
            alert('Spring');
            break;
        case 6:
        case 7:
        case 8:
            alert('Summer');
            break;
        case 9:
        case 10:
        case 11:
            alert('Autumn');
            break;
        default:
            alert('Недопустимое число');
            break;
    }
}
