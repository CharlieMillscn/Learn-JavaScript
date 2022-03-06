function promiseWithTimeout(delay = 3000) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject(Error("time is out!"));
    }, delay);
    setTimeout(() => {
      resolve({ data: { code: 200, data: [] } });
    }, 2000);
  });
}
promiseWithTimeout(1000)
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
