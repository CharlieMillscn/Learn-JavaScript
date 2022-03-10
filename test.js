// new Promise.then(
//   new Promise().then(
//     new Promise().then(new Promise().then(new Promise().then()))
//   )
// );
// new Promise(function (resolve) {
//   console.log(1);
//   resolve();
// }).then(function () {
//   console.log(4);
//   new Promise(function (resolve) {
//     console.log(2);
//     resolve();
//   }).then(function () {
//     console.log(6);
//   });
// });
// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// wait().then(() => console.log(4));
// Promise.resolve()
//   .then(() => console.log(2))
//   .then(() => console.log(3));
// console.log(1);
setTimeout(() => console.log("a"));
Promise.resolve()
  .then(() => console.log("b"))
  .then(() =>
    Promise.resolve("c").then((data) => {
      setTimeout(() => console.log("d"));
      console.log("f");
      return data;
    })
  )
  .then((data) => console.log(data));
