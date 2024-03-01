// _______Problem_1_______

const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) {
        break;
    }
}


// _______Problem_2_______

const arr2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] === 4) {
        console.log(i);
    }
}


// _______Problem_3_______

const arr3 = [1, 3, 5, 10, 20];

const joinArr3 = arr3.join(' ');
console.log(joinArr3);


// _______Problem_4_______

const arr4 = [];

for(let i = 0; i < 3; i++) {
    arr4[i] = [];
    for (let j = 0; j < 3; j++) {
        arr4[i][j] = 1;
    }
}
console.log(arr4);


// _______Problem_5_______

const arr5 = [1, 1, 1];

for (let i = 0; i < 3; i++) {
    arr5.push(2);
}
console.log(arr5);


// _______Problem_6_______

let arr6 = [9, 8, 7, 'a', 6, 5];

arr6.sort().pop();

console.log(arr6);


// _______Problem_7_______

arr7 = [9, 8, 7, 6, 5];

let userNum = Number(prompt('Угадай число, которое я загадал'));

if (arr7.includes(userNum)) {
    alert("УГАДАЛ!!!");
} else {
    alert("Не угадал! :-((");
}


// _______Problem_8_______

let str = 'abcdef';

str = str.split('').reverse().join('');

console.log(str);


// _______Problem_9_______

const arr9 = [
    [1, 2, 3], 
    [4, 5, 6]
];

let newArr9 = [];
let q = 0;
for(let i = 0; i < arr9.length; i++) {
    for(let j = 0; j < arr9[i].length; j++) {
        newArr9[k] = arr9[i][j];
        q++
    }
}
   
console.log(newArr9);


// _______Problem_10_______

const arr10 = [];
let summ = [];
let l = 0;

for (var i = 0; i < 15; i++) {
    arr10.push(Math.floor(Math.random()*11));
  }

  console.log(`Сгенерированный массив: ${arr10}`);

  for (let i = 0; i < arr10.length; i++) {
    if (i < arr10.length - 1) {
        sum[l] = arr10[i] + arr10[i + 1];
        console.log(`Сумма элементов ${i} и ${i+1} равна ${summ[l]}`);
        l++;
    } else {
        console.log(`Последний элемент равен ${arr10[i]}`);
    }
  }


// _______Problem_11_______

let arr11 = [];

let squaring = function() {

    for(var i = 0; i < 10; i++) {
        arr11.push(Math.floor(Math.random()*16));
    }

    console.log(`Сгенерированный массив: ${arr11}`);

    const newArr11 = arr11.map(per => per ** 2);

    return newArr11;
}

console.log(`Полученный массив: ${squaring()}`);


// _______Problem_12_______

const arr12 = ['qwerty', 'zawsxcderfv', 'qwdfghjm', 'bnjuyt', 'qnhpzvjiuytfdfghbt'];
const arrNum12 = [];

let strNum = function() {
    for (let i = 0; i < arr12.length; i++) {
        arr12[i] = arr12[i].split('');
        arrNum12[i] = arr12[i].length;
    }
    return arrNum12;
}
strNum();
console.log(arrNum12);


// _______Problem_13_______

const arr13 = [3, 5, -1, -45, 47, -2, -87, 100, -777];
let newArr13;

const arr13func = function() {
    newArr13 = arr13.filter(num => num < 0);
    return newArr13;
}
arr13func();
console.log(newArr13);


// _______Problem_14_______

const arr14 = [];
const newArr14 = [];
let k = 0;

    for(var i = 0; i < 10; i++) {
        arr14.push(Math.floor(Math.random()*11));
    }

    console.log(`Исходный массив: ${arr14}`);

    for (let i = 0; i < arr14.length; i++) {
        if (arr14[i] % 2 !== 0) {
            continue;
        } else {
            newArr14[k] = arr14[i];
            k++;
        }
    }

    console.log(`Новый массив: ${newArr14}`);

// _______Problem_15_______


const arr15 = []

for(var i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random()*11));
}

console.log(`Сгенерированный массив: ${arr15}`);

const sum = arr15.reduce((total, number) => total + number, 0);
let midNum = sum / arr15.length;

console.log(`Среднее арифметическое: ${midNum}`);