const union = (a, b) => {
  return a.filter((item) => {
    return b.indexOf(item) != -1;
  });
};
const a = [1, 2, 2, 1];
const b = [2, 3, 2];
console.log(union(a, b)); // [2, 2]

let s1 = new Set(arr1);
let s2 = new Set(arr2);
// let result = new Set(arr1.filter(item => s2.has(item)))
