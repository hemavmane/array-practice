// let arr = [3,-5,4,8,7,22,"31",23,11,-11,13,6,9,10,3]
// function isprime(num){
//   console.log(num);
//   for(let i =2; i<num; i++){

//   if(num%i===0){
//   return false

//   }
//   return num>1   
  
// // console.log(num);

//   }
//   }

// result = arr.filter(isprime)

// console.log(result)
// console.log(result.length);

// const array = [3,-5,4,8,7,22,31,23,11,-11,13,6,9,10,3];

// function iskiranrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// // -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
// console.log(array.filter(iskiranrime)); // [2, 3, 5, 7, 11, 13]
// console.log(array.filter(iskiranrime).length)

// const arr = [
//   { kiran: 15 },
//   { kiran: -1 },
//   { kiran: 0 },
//   { kiran: 0},
//   { kiran: 12.2 },
//   {},
//   { kiran: null },
//   [],
//   { kiran: false },
//   { kiran: true },
//   { kiran: NaN },
//   { kiran: "undefined" },
// ];

// // let count = 0;

// // function u(g) {
// //   if (Number.isFinite(g.kiran) && g.kiran !== 0) {
// //     return true;
//   }
//   count++;
//   return false;
// }

// const x = arr.filter(u);

// console.log(count);

// console.log(x);