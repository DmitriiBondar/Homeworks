// function doubleChar(str) {
//     let x = str.split('').map(el => el+el).join('');
//     return x;
//   }
//   console.log(doubleChar('sttring123'));



// let x = [1, 6, '45', 'qsxce32', -45678, 0];
//   function filter_list(l) {
//     return l.filter(el => el >= 0).filter(Number.isInteger);
//   }
//   console.log(filter_list(x));


// q = [1, 6, 3, 45, 0, -5, 60];
// function sumArray(array) {
//   let x = array.reduce((partialSum, a) => partialSum + a, 0);
//   console.log(x);
//   let output = x - Math.max(...array) - Math.min(...array);
//   return output;
// }
// console.log(sumArray(q));



// let q = [1, 6, 3, 45, 0, -5, 60];

// function sumArray(array) {
//   let x;
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] < array[i]) {
//         min = array[j];
//         max = array[i];
//       }
//     }
//   }

//   x = array.reduce((partialSum, a) => partialSum + a, 0) - min - max;

//   return x;
// }
// console.log(sumArray(q)); 


// let x = 'a fg ertyhgfd rtyujhg fghnbv ghr hgffgvc!';
// let z = [];

// function stringToArray(string){
// let z = string.split(' ');
// return z;
// }
// console.log(stringToArray(x));


// let arr = [ 3, 10, 3, 3, 3 ];
// function findUniq(arr) {
//   for(let i = 1; i < arr.length; i++) {
//     if(arr[i] !== arr[i-1] && arr[i] > arr[i-1]) {
//       return arr[i];
//     } else if (arr[i] !== arr[i-1] && arr[i] < arr[i-1]) {
//       return arr[i-1];
//     }
//   }
// }
// console.log(findUniq(arr));