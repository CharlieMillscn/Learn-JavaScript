function get(object, path, defaultVal = "undefined") {
  // 先将path处理成统一格式
  let newPath = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    // 先将字符串中的'['、']'去除替换为'.'，split分割成数组形式
    newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  console.log(newPath);
  // 递归处理，返回最后结果
  return (
    newPath.reduce((o, k) => {
      return (o || {})[k];
    }, object) || defaultVal
  );
}

var object = { a: [{ b: { c: 3 } }] };
console.log(get(object, "a[0].b.c"));
// => 3
console.log(get(object, ["a", "0", "b", "c"]));
// => 3
console.log(get(object, "a.b.c", "default"));
// => "default"
