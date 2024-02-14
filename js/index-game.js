// _____problem_1_____

// let a = 10;
// alert(a);
// a = 20;
// alert(a);


// _____problem_2_____

// let firstIphone = 2007;
// alert(firstIphone);


// _____problem_3_____

// let JSfounder = 'Brendan Eich';
// alert('Язык JavaScript основал ' + JSfounder);


// _____problem_4_____

// Вариант_1

// let a = 10;
// let b = 2;
// alert('Сумма чисел равна ' + (a+b));
// alert('Разность чисел равна ' + (a-b));
// alert('Произведение равно ' + (a*b));
// alert('Частное равно ' + (a/b));

// Вариант_2

// let a = 10;
// let b = 2;
// let sum = a + b;
// let diff = a - b;
// let mult = a * b;
// let div = a / b;
// alert(`Сумма чисел равна ${sum}; Разность равна ${diff}; Произведение ${mult}; Частное ${div}.`)


// _____problem_5_____

// let a = 2;
// let result = 2**5;
// alert('Возведём 2 в степень 5. Получим ' + result);


// _____problem_6_____

// let a = 9;
// let b = 2;
// let result = 9 % 2;
// alert('Остаток от деления равен ' + result);


// _____problem_7_____

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);


// _____problem_8_____

// let age = Number(prompt('Сколько Вам лет?'));
// if([1, 21, 31, 41, 51, 61, 71, 81, 91, 101].includes(age)) {
//     alert('Вам ' + age + ' год.');
// } else if([2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94, 102, 103, 104].includes(age)) {
//     alert('Вам ' + age + ' годa.');
// } else {
//     alert('Вам ' + age + ' лет.');
// }


// _____problem_9_____

// let user = {
//     age: 7,
//     name: 'Vasiliy',
//     isAdmin: true
// }

// user.cityOfResidence = 'Moscow';
// console.log(user);

// user.age = 17;
// console.log(user);

// delete user.cityOfResidence;
// console.log(user);

// let info = prompt('Какую информацию хотите узнать о пользователе?');
// if(info == 'age') {
//     alert(`Возраст ${user.age}`);
// } else if (info == 'name') {
//     alert(`имя ${user.name}`)
// } else if (info == 'isAdmin') {
//     if(user.isAdmin == true) {
//         alert('Пользователь является админом.');
//     } else {
//         alert('Пользователь не админ.');
//     }
// } else {
//     alert('Такой информации нет.')
// }


// _____problem_10_____

// let name = prompt('Как Ваше имя?');
// alert(`Привет, ${name}!`);