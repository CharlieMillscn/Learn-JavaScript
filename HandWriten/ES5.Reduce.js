Array.prototype.reduce = function (fn, initialValue) {
  const arr = Array.prototype.slice.call(this);
  let res, startIndex;
  res = initialValue ? initialValue : arr[0];
  startIndex = initialValue ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    // 把初始值、当前值、索引、当前数组返回去。
    // 调用的时候传到函数参数中 [1,2,3,4].reduce((initVal,curr,index,arr))
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
};
function getSum(total, num) {
  return total + num;
}
console.log([65].reduce(getSum));
