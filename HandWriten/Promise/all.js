/*
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });
  expected output: Array [3, 42, "foo"]
*/
Promise.all1 = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [],
      index = 0,
      len = promises.length;
    if (len == 0) {
      resolve(results);
      return;
    }
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then((data) => {
          results[i] = data;
          index++;
          if (index == len) resolve(results);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

let p1 = new Promise((resolve, reject) => {
  resolve("成功了");
});

let p2 = new Promise((resolve, reject) => {
  resolve("success");
});

let p3 = Promise.reject("失败");

Promise.all1([p1, p2])
  .then((result) => {
    console.log(result); //['成功了', 'success']
  })
  .catch((error) => {
    console.log(error);
  });

Promise.all1([p1, p3, p2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); // 失败了，打出 '失败'
  });
