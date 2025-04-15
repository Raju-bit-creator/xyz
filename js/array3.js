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
