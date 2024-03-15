// _______Problem-1_______

const peopleX = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(peopleX.sort((a, b) => parseFloat(a.age) - parseFloat(b.age)));


 // _______Problem-2_______

 function isPositive(val) {
        return val > 0;
    }
    function isMale(el) {
    return el.gender === 'male'
    }
    function filter(arr, element) {
        const filtered = [];

        for(let i = 0; i < arr.length; i++) {
            if(element(arr[i])) {
                filtered.push(arr[i]);
            }
        }
        return filtered;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));


 // _______Problem-3_______

const dateEveryThreeSeconds = () => {

    const intervalDate = setInterval(() => {
        console.log(Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(intervalDate);
        console.log('30 секунд прошло');
    }, 30000);
}

dateEveryThreeSeconds();


 // _______Problem-4_______

 function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})


 // _______Problem-5_______

 // Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Вася'))