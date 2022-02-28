Array.prototype.myMap = function (fn, thisArg) {
  var res = [];
  thisArg = thisArg || [];
  this.reduce(function (pre, cur, index, arr) {
    res.push(fn.call(thisArg, cur, index, arr));
  }, []);
  return res;
};
var arr = [2, 3, 1, 5];
arr.myMap(function (item, index, arr) {
  console.log(item, index, arr);
});
let res = arr.myMap((v) => v * 2);
console.log(res);
