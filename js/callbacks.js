// to pass function as a parameter  to another function
function fetchData(c) {
  console.log("api is fetching...");
  setTimeout(() => {
    c("api fecthed successfully");
  }, 2000);
}
// to call function with parameter
fetchData((data) => {
  console.log(data);
});

//handling promise and async/await

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("internal server error");
    // resolve({
    //   data: "data from promise",
    // });
    resolve({
      email: "anish@gmail.com",
      password: "123456",
    });
  }, 2000);
});
promise
  .then((data) => console.log(data))
  .catch((errror) => {
    console.log(errror);
  });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("data from promise");
    } else {
      reject("internal server error on line 40");
    }
  }, 2000);
});
myPromise.then((m) => console.log(m)).catch((errror) => console.log(errror));

// async await
const fetchData2 = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  let data = await response.json();
  console.log(data);
};

fetchData2();
