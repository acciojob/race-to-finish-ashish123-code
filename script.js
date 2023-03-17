window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promises = [
    new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), Math.random() * 4000 + 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), Math.random() * 4000 + 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), Math.random() * 4000 + 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Promise 4 resolved"), Math.random() * 4000 + 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Promise 5 resolved"), Math.random() * 4000 + 1000))
  ];

  // Use Promise.any() to wait for the first promise to resolve, and then print its result to the output div
  Promise.any(promises)
    .then((result) => {
      document.getElementById("output").innerText = result;
    })
    .catch((error) => console.log(error));
