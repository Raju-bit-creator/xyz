// for loop // map // forEach

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; //i =>0, 1, 2, 3, 4, 5, 6, 7, 8, 9

console.log("this is total number:", num.length);

let oddNumber = [];
let evenNumber = [];
// using for loog

// for (let i = 0; i < num.length; i++) {
//   const x = num[i]; //num[i]=1
//   if (x % 2 === 0) {
//     evenNumber.push(x);
//   } else {
//     oddNumber.push(x);
//   }
// }
// console.log("this is odd number", oddNumber);
// console.log("this is even number", evenNumber);

// using map iterative method
// num.map((i) => {
//   if (i % 2 == 0) {
//     evenNumber.push(i);
//   } else {
//     oddNumber.push(i);
//   }
// });
// console.log("this is odd number", oddNumber);
// console.log("this is even number", evenNumber);
// usign forEach iterative method

// num.forEach((n) => {
//   if (n % 2 == 0) {
//     evenNumber.push(n);
//   } else {
//     oddNumber.push(n);
//   }
// });
// console.log("this is odd number", oddNumber);
// console.log("this is even number", evenNumber);

// let students = ["ram", "shyam", "hari", "sanjaya", "prem"];
// console.log("total number of students", students.length);

//difference between map and foreach

let numbers = [1, 2, 3];

let y = numbers.forEach((x) => x * 2);
console.log("this is value of y:", y);

let z = numbers.map((e) => e * 2);
console.log("this is value of z:", z);
