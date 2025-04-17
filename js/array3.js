let course = [
  { name: "Python", completedStatus: false },
  { name: "Java", completedStatus: true },
  { name: "C++", completedStatus: false },
  { name: "JavaScript", completedStatus: true },
  { name: "MERNStack", completedStatus: false },
];

const completed = [];
const incomplete = [];
for (let index = 0; index < course.length; index++) {
  const element = course[index];
  if (element.completedStatus) {
    completed.push(element.name);
  } else {
    incomplete.push(element.name);
  }
}
console.log(completed);
console.log(incomplete);

console.log(1);
console.log(2);
console.log(3);

// print 1-100 using for loop
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
// by using map [1-100]
const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(numbers);

let countries = [
  { name: "India", countryCode: "In" },
  { name: "USA", countryCode: "Us" },
  { name: "UK", countryCode: "Uk" },
  { name: "Australia", countryCode: "Au" },
  { name: "Germany", countryCode: "Ge" },
  { name: "France", countryCode: "Fr" },
  { name: "Japan", countryCode: "Ja" },
];

const getCountryCode = (countryName) => {
  let country = countries.find(
    (c) => c.name.toLocaleLowerCase() === countryName.toLowerCase().trim()
  );
  if (country) {
    return country.countryCode;
  } else {
    return "Country not found";
  }
};
// get country code of India
console.log(getCountryCode(" AUSTRALIA "));

const maskNumber = (accoutNumber) => {
  let strNumber = accoutNumber.toString();
  let lastFour = strNumber.slice(-4);
  let maskedNumber = "x".repeat(strNumber.length - 4);

  return lastFour + maskedNumber;
};

const bankAccoutNumber = "122334455667778788";
console.log(maskNumber(bankAccoutNumber));

let users = [
  { name: "John", role: "admin" },
  { name: "Jane", role: "user" },
  { name: "Bob", role: "admin" },
  { name: "Alice", role: "user" },
];
// let grouped = Object.groupBy(users, ({ role }) => role);
// console.log(grouped);

let admin = [];
let user1 = [];
users.forEach((user) => {
  if (user.role === "admin") {
    admin.push(user);
  } else {
    user1.push(user);
  }
});
console.log(admin);
console.log(user1);

// what is palindrome??
// a word, phrase, number, or other sequence of characters that reads the same forward and backward
const generatePalindrome = (n, k) => {
  if (k > 26) {
    return "k should be less than 26";
  }
  let char = "abcdefghijklmnopqrstuvwxyz".slice(0, k);
  let result = new Array(n); //creating instance

  for (let i = 0; i < Math.ceil(n / 2); i++) {
    result[i] = char[i % k];
    result[n - i - 1] = result[i];
  }
  return result.join("");
};
console.log(generatePalindrome(10, 5));

//  fibonacci series
let num = 5;

let fib = [0, 1];
for (let i = 2; i <= num; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(fib);
