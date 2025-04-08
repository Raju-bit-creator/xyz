// let students = [
//   { name: "John", age: 20, mark: 30 },
//   { name: "Anna", age: 21, mark: 40 },
//   { name: "Peter", age: 19, mark: 50 },
//   { name: "Linda", age: 22, mark: 60 },
//   { name: "Jack", age: 23, mark: 70 },
//   { name: "Jane", age: 21, mark: 40 },
// ];

// console.log(students[6]);

// students.map((e) => {
//   console.log(
//     `${e.name} is ${e.age} years old and  he obtained ${e.mark} mark on mern stack course`
//   ); //template literal
// });

let a = 5;
console.log(a == "5"); // true -> because "5" is converted to number
console.log(null === undefined); // true
// ✅ === (Strict Equality)
// Compares both value and type (no type coercion).

let cart = [
  {
    qty: 3,
    price: 9,
  },
  {
    qty: 2,
    price: 6,
  },
  {
    qty: 4,
    price: 29,
  },
  {
    qty: 1,
    price: 29,
  },
];

const total = cart.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
console.log("sum total is:", total);
