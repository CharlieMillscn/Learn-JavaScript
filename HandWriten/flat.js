let result = [];
const fn = (arr) => {
  for (let i of arr) {
    if (Array.isArray(i)) {
      fn(i);
    } else {
      result.push(i);
    }
  }
};
const fn2 = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? fn2(cur) : cur);
  }, []);
};
a = [1, [2, [3, [4, 5]]], 6];
b = [1, [2, [3, [4, 5]]], 6];
console.log(fn2(a));
// console.log(a, result);
while (b.some(Array.isArray)) {
  b = [].concat(...b);
}
console.log(b);
