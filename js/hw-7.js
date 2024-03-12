// _______Problem_1_______

let toUpper = 'js';

console.log(toUpper.toUpperCase());


// _______Problem_2_______

const strArr = ['Крокодил Женя', 'Малыш улетел', 'Карлсон, который жИвет в Сочи', 'мАлыШ - депутат'];
let str = 'МаЛыШ';
const newStrArr = [];

const findWordInStrings = (array, string) => {

   array.forEach((el) => {

      if (el.toLowerCase().startsWith(string.toLowerCase())) {
         newStrArr.push(el);
      }
   });
}

findWordInStrings(strArr, str);
console.log(newStrArr);


// _______Problem_3_______

let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));


// _______Problem_4_______

const nums = [52, 53, 49, 77, 21, 32];

console.log(`Минимальное число: ${Math.min(...nums)}; Максимальное число: ${Math.max(...nums)}`);


// _______Problem_5_______

const randomNum = () => console.log(Math.floor(Math.random()*10) + 1);
randomNum();


// _______Problem_6_______

let randNum = Math.floor(Math.random() * 10) + 10;
let madeArr = [];

let makeArr = (number) => {

   for (let i = 0; i < number/2; i++) {
      madeArr[i] = Math.floor(Math.random() * number);
   }

   return madeArr;
}

console.log(makeArr(randNum));


// _______Problem_7_______

let firstNum = Math.floor(Math.random() * 10);
let secondNum = Math.floor(Math.random() * 30) + firstNum + 1;

let getRandNum = (num1, num2) => console.log(Math.floor(Math.random() * (num2 - num1)) + num1);

console.log(`Число ниже в диапазоне от ${firstNum} до ${secondNum}`);

getRandNum(firstNum, secondNum);


// _______Problem_8_______

let currDate = new Date();
console.log(currDate);


// _______Problem_9_______

let currentDate = new Date();
let afterNumDays = (days) => currentDate.setDate(currentDate.getDate() + days);

console.log(new Date(afterNumDays(73)));


// _______Problem_10_______

let thisDate = new Date();

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let currrentDate = (days, months) => {
   let fullDate = "Сегодня: " + thisDate.getDate() + 

" " + months[thisDate.getMonth()] + 

" " + thisDate.getFullYear() + 

", " + days[thisDate.getDay()]; 

console.log(fullDate);
}

currrentDate(days, months);


// _______Problem_11_______

let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];