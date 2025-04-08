// const students = [
//   { name: "Ramesh", paidStatus: true, scholarship: false },
//   { name: "Suresh", paidStatus: false, scholarship: true },
//   { name: "Rajesh", paidStatus: false, scholarship: false },
//   { name: "Rahul", paidStatus: false, scholarship: false },
//   { name: "Rohan", paidStatus: true, scholarship: false },
// ];

// using forEach

// students.forEach((s) => {
//   if (!s.paidStatus || s.scholarship) {
//     console.log(`paid , ${s.name} can give exam`);
//   } else {
//     console.log(`${s.name} cannot give exam`);
//   }
// });

const students = [
  { name: "Ramesh", paidStatus: true, scholarship: false },
  { name: "Suresh", paidStatus: false, scholarship: true },
  { name: "Rajesh", paidStatus: false, scholarship: false },
  { name: "Rahul", paidStatus: false, scholarship: false },
  { name: "Rohan", paidStatus: true, scholarship: false },
];

// using map method
students.map((s) => {
  if (!s.paidStatus || s.scholarship) {
    console.log(`paid , ${s.name} can give exam`);
  } else {
    console.log(`${s.name} cannot give exam`);
  }
});
