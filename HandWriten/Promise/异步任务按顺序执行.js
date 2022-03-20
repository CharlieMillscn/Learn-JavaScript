var p1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1");
    }, 1000);
  });
};
var p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2");
    }, 500);
  });
};
var p3 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3");
    }, 100);
  });
};
const run = function (arr, start = 0) {
  if (start > arr.length || start < 0) return; // 参数start不能超过    arr.length，不能为负数
  var next = function (i) {
    if (i < arr.length) {
      var fn = arr[i];
      fn().then((res) => {
        console.log(res);
        i++;
        next(i);
      });
    }
  };
  next(start);
};
run([p2, p1, p3]);
