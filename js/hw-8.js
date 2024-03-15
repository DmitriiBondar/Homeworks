// _______Problem-1_______

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort((a, b) => parseFloat(a.age) - parseFloat(b.age)));


 // _______Problem-2_______



 // _______Problem-3_______

    console.log(Date());

    const intervalDate = setInterval(() => {
        console.log(Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(intervalDate);
    }, 30000);


 // _______Problem-4_______



 // _______Problem-5_______
