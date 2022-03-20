/*
  柯里化的定义：接收一部分参数，返回一个函数接收剩余参数，接收足够参数后，执行原函数。
  函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。
*/
const curry = (fn, arr = []) => {
  let len = fn.length;
  return function () {
    const newArgs = [...arguments, ...arr];
    if (newArgs.length === len) {
      return fn.apply(this, newArgs);
    } else {
      return curry(fn, newArgs);
    }
  };
};

function multiFn(a, b, c) {
  return a * b * c;
}

var multi = curry(multiFn);

console.log(multi(2)(3)(4));
// multi(2, 3, 4);
console.log(multi(2)(3, 4));
// multi(2, 3)(4);
