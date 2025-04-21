//local storage
// setItem
// getItem
// removeItem
let user = {
  name: "Ram",
  email: "ram@gmail.com",
  occupation: "Developer",
  age: 20,
};

console.log("name of user is: ", user.name);

localStorage.setItem("name", "Joship");
localStorage.setItem("token", "abc123token");
localStorage.setItem("user", JSON.stringify(user)); //convert user object into stringify format

let stringUser = JSON.stringify(user);
console.log("string user", stringUser);
console.log("string user name", stringUser.name);

let objUser = JSON.parse(stringUser);
console.log("obj user", objUser.name);

let storedName = localStorage.getItem("name");
console.log("Stored name from localStorage:", storedName);
