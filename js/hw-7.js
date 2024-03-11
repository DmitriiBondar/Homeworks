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

// _______Problem_8_______

// _______Problem_9_______


// _______Problem_10_______

// _______Problem_11_______