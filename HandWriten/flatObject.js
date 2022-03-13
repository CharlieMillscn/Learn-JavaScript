const res = {};
const _flatten = function (o, prev = null) {
  if (Array.isArray(o)) {
    for (const index in o) {
      const ele = o[index];
      if (ele instanceof Object) {
        _flatten(ele, `${prev ? prev : ""}[${index}]`);
      } else {
        if (ele) {
          res[`${prev ? prev : ""}[${index}]`] = ele;
        }
      }
    }
    return;
  }
  for (const key in o) {
    if (typeof o[key] === "object") {
      if (o[key] !== null) {
        _flatten(o[key], `${prev ? prev + "." : ""}${key}`);
      }
    } else {
      if (o[key] !== undefined) {
        res[`${prev ? prev + "." : ""}${key}`] = o[key];
      }
    }
  }
};
_flatten({
  a: "a",
  b: [1, { c: true, d: [3, 6, 8] }, [3, 6, 8]],
  d: { e: undefined, f: 3 },
  g: null,
});
console.log(res);
