let students = [
  { name: "John", age: 20, mark: 30 },
  { name: "Anna", age: 21, mark: 40 },
  { name: "Peter", age: 19, mark: 50 },
  { name: "Linda", age: 22, mark: 60 },
  { name: "Jack", age: 23, mark: 70 },
  { name: "Jane", age: 21, mark: 40 },
];

console.log(students[6]);

students.map((e) => {
  console.log(
    `${e.name} is ${e.age} years old and  he obtained ${e.mark} mark on mern stack course`
  ); //template literal
});
