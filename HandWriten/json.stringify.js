function jsonStringify(obj) {
  let type = typeof obj;
  if (type != "object") {
    if (["string", "undefined", "function"].includes(type)) {
      obj = `"${obj}"`;
    }
    return obj;
  } else {
    let json = [];
    let isArray = Array.isArray(obj);
    for (let k in obj) {
      let v = obj[k];
      let type = typeof v;
      if (["string", "undefined", "function"].includes(type)) {
        v = `"${v}"`;
      } else if (type == "object") {
        v = jsonStringify(v);
      }
      json.push((isArray ? "" : '"' + k + '":') + String(v));
    }
    return (isArray ? "[" : "{") + String(json) + (isArray ? "]" : "}");
  }
}
console.log(jsonStringify({ x: 5 })); // "{"x":5}"
console.log(jsonStringify([1, "false", false])); // "[1,"false",false]"
console.log(
  jsonStringify({
    b: undefined,
    a: {
      c: 5,
    },
  })
); // "{"b":"undefined"}"
// var json = (new Function('return ' + jsonStr))();
// return eval('(' + opt + ')');
