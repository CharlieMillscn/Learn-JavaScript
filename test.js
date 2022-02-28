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
