const compare = (a, b) => {
  if (a === b) {
    return true;
  }
  if ((typeof a === typeof b) === "function") {
    return false;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!compare(a[i], b[i])) return false;
    }
    return true;
  }
  if (a instanceof Object && b instanceof Object) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (const a_key in a) {
      if (!compare(a[a_key], b[a_key])) return false;
    }
    return true;
  }
};
const temp = [
  { a: 1 },
  { a: 1, b: 1 },
  { a: 1 },
  { b: { a: 1 }, a: 1 },
  { a: 1, b: { a: 1 } },
];
temp.sort((a, b) => Object.keys(a).length - Object.keys(b).length);
const newArr = temp.reduce((pre, cur) => {
  if (!compare(pre[pre.length - 1], cur)) {
    pre.push(cur);
  }
  return pre;
}, []);
console.log(newArr);
