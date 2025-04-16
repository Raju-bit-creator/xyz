//filter mathod in array
let numbers = [1, 2, 3, 4];
let filterNumber = numbers.filter((number) => number < 4);
console.log("array number less than 4 is:", filterNumber);

// find method
let numbers2 = [3, 4];
let findNumber = numbers2.find((number) => number < 4);
console.log("array number less than 4 is:", findNumber);

let cartItems = [
  {
    name: "Ram",
    products: [
      { title: "labtop", price: 1000 },
      { title: "mouse", price: 50 },
      { title: "keyboard", price: 200 },
    ],
  },
  {
    name: "Shyan",
    products: [
      { title: "labtop", price: 100 },
      { title: "mouse", price: 40 },
      { title: "keyboard", price: 20 },
    ],
  },
  {
    name: "Sita",
    products: [
      { title: "labtop", price: 1050 },
      { title: "mouse", price: 50 },
      { title: "keyboard", price: 200 },
    ],
  },
  {
    name: "Gita",
    products: [
      { title: "labtop", price: 200 },
      { title: "mouse", price: 50 },
      { title: "keyboard", price: 200 },
    ],
  },
  {
    name: "Prem",
    products: [
      { title: "labtop", price: 200 },
      { title: "mouse", price: 50 },
      { title: "keyboard", price: 200 },
    ],
  },
];

cartItems.map((prod) => {
  let total = prod.products.reduce((acc, cur) => acc + cur.price, 0);
  //   console.log(prod.name, "total price is:", total);

  console.log(`${prod.name},total expenditure is ${total} `);
});

const students = [
  { name: "Rahul", age: 20, address: "kathmandu" },
  { name: "Sanjay", age: 21, address: "janakpur" },
  { name: "Rahul", age: 20, address: "lalitpur" },
  { name: "Suresh", age: 29, address: "Bhaktapur" },
];

students.map((i) => {
  console.log(`${i.name} live in ${i.address} whose age is ${i.age}.`);
});

// ternary operator (shortcut of if else)
let age = 15;
console.log(age > 18 ? "you can vote" : "you cannot vote");
// if (age > 18) {
//   console.log("you are adult");
// } else {
//   console.log("you are minor");
// }

let cartItems1 = [
  {
    name: "Ram",
    products: [
      {
        title: "Iphone",
        models: [
          {
            color: "red",
            price: 5000,
          },
          {
            color: "yello",
            price: 6000,
          },
          {
            color: "black",
            price: 7000,
          },
        ],
      },
      { title: "mouse", price: 50 },
      { title: "keyboard", price: 200 },
    ],
  },
  {
    name: "Shyan",
    products: [
      { title: "labtop", price: 100 },
      { title: "mouse", price: 40 },
      { title: "keyboard", price: 20 },
    ],
  },
  {
    name: "Sita",
    products: [
      { title: "labtop", price: 1050 },
      { title: "mouse", price: 50 },
      { title: "keyboard", price: 200 },
    ],
  },
  {
    name: "Gita",
    products: [
      { title: "labtop", price: 200 },
      { title: "mouse", price: 50 },
      { title: "keyboard", price: 200 },
    ],
  },
  {
    name: "Prem",
    products: [
      { title: "labtop", price: 200 },
      { title: "mouse", price: 50 },
      { title: "keyboard", price: 200 },
    ],
  },
];

let cartItems2 = [
  {
    name: "apple",
    price: 100,
    quantity: 2,
  },
  {
    name: "Mango",
    price: 10,
    quantity: 5,
  },
  {
    name: "Banana",
    price: 10,
    quantity: 3,
  },
  {
    name: "Grapes",
    price: 100,
    quantity: 2,
  },
  {
    name: "straberry",
    price: 50,
    quantity: 2,
  },
];

// const total = cartItems2.reduce(
//   (acc, curr) => acc + curr.price * curr.quantity,
//   0
// );
// console.log("total of cartitems2 is: ", total);

const total = cartItems2
  .slice(0, 3)
  .reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
console.log("total of cartitems2 is: ", total);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let popNumber = number.pop();
console.log(number);

let num1 = [1, 2, 3, 4, 5];
let pushNum = num1.push(6, 7, 8);
console.log(num1);

// shift
let num2 = [1, 2, 3, 4, 5];
let shiftNum = num2.shift();
console.log(num2);

//unshift
let num3 = [1, 2, 3, 4, 5];
let unshiftNum = num3.unshift(6, 7, 8);
console.log(num3);

// assignment to explore array methods splice , indexOf , findIndex , includes Math.ceil() math.floor()
