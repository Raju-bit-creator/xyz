// alert("are you sure?");
// if (confirm("are you sure?")) {
//   console.log("this is my first class");
// }
// let xyz = confirm("are you sure??");
// console.log(xyz);
// if (xyz) {
//   console.log("friend request acepted");
// } else {
//   console.log("you have been blocked");
// }

// let yourPromt = prompt("entery your good name");
// console.log(yourPromt);

const button = document.getElementById("myButton");
const demo = document.getElementById("myPara");
button.addEventListener("click", function () {
  demo.textContent = "Good afternoon all!!";
});
