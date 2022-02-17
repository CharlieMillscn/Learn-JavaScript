/*
  const resolved = Promise.resolve(42);
  const rejected = Promise.reject(-1);

  const allSettledPromise = Promise.allSettled([resolved, rejected]);

  allSettledPromise.then(function (results) {
    console.log(results);
  });
  // [
  //    { status: 'fulfilled', value: 42 },
  //    { status: 'rejected', reason: -1 }
  // ]
*/
function allSettled(iterable) {
  return new Promise((resolve, reject) => {
    let res = [],
      elementCount = 0,
      index = 0;
    for (const promise of iterable) {
      const currentIndex = index;
      promise.then(
        (value) => {
          res[currentIndex] = { status: "fulfilled", value };
          elementCount++;
          if (elementCount === res.length) {
            resolve(res);
          }
        },
        (reason) => {
          res[currentIndex] = { status: "rejected", reason };
          elementCount++;
          if (elementCount === res.length) {
            resolve(res);
          }
        }
      );
      index++;
    }
    if (index === 0) {
      resolve([]);
      return;
    }
  });
}
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
  console.log(results);
});
