let a = [1, [2, [3, [4, 5]]], 6];
let result = [];
const fn = (arr) => {
  for (let item of arr) {
    if (Array.isArray(item)) {
      fn(item);
    } else {
      result.push(item);
    }
  }
};
fn(a);
console.log(result);
const fn2 = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? fn2(cur) : cur);
  }, []);
};
console.log(fn2(a));
// console.log(a, result);
b = [1, [2, [3, [4, 5]]], 6];
const flat1 = (data, count) => {
  while (data.some(Array.isArray) && count) {
    data = [].concat(...data);
    count--;
  }
  return data;
};
console.log(flat1(b, 4));
