// ___Problem_1___

for (let i = 0; i < 2; i++) {
    console.log('Привет');   
}


// // ___Problem_2___

for (let i = 1; i < 6; i++) {
    console.log(i);
}


// // ___Problem_3___

for (let i = 7; i < 23; i++) {
    console.log(i);
}


// ___Problem_4___

let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}
for (const key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}


// ___Problem_5___

let num = 0;
let n = 1000;
while(n >= 50) {
    num++;
    n /= 2;
}
console.log(`Количество итераций: ${num}; Получено число ${n}`);


// ___Problem_6___

let firstFriday = 3;
for(let i = firstFriday; i <= 31; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}