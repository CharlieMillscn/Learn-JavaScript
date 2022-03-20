function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, Math.floor(Math.random() * 100));
}

const getAddify = (a, b) => {
  return new Promise((resolve) => {
    asyncAdd(a, b, (err, data) => {
      resolve(data);
    });
  });
};

const sum = async (...params) => {
  let res = 0;
  for (const number of params) {
    res = await getAddify(res, number);
  }
  return res;
};

(async () => {
  const result1 = await sum(1, 4, 6, 9, 1, 4);
  const result2 = await sum(3, 4, 9, 2, 5, 3, 2, 1, 7);
  const result3 = await sum(1, 6, 0, 5);
  console.log([result1, result2, result3]); // [25, 36, 12]
})();
