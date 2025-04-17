let users = [
  //   { _id: 1, name: "ram", email: "ram@gmail.com", password: "ram123" },
  //   ,
  "Ram",
  "Shyam",
  "Hari",
  "Gopal",
  "Krishna",
  "Govind",
  "Sita",
];

const registerUser = (name) => {
  const user = users.find((r) => r.toLowerCase() === name.toLowerCase().trim());
  if (user) {
    console.log(`${user} is register user `);
  } else {
    console.log(`${name} is not register user `);
  }
};
registerUser(" Sita ");
