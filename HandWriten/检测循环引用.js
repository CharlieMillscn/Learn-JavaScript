const isLoop = (originObj) => {
  let rs = "";
  try {
    JSON.stringify(originObj);
  } catch (err) {
    rs = err; // 可执行
  }
  return rs.toString().indexOf("circular") === -1 ? false : true;
};

// var obj1 = { a: "1" };
// obj1.b = {};
// obj1.b.a = obj1.b;

function hasLoop(obj) {
  // 判断对象内部是否有和源相同的属性
  function findLoop(target, src) {
    // 源数组，并将自身传入
    const source = src.slice().concat([target]);

    for (const key in target) {
      // 如果是对象才需要判断
      if (typeof target[key] === "object") {
        // 如果在源数组中找到 || 递归查找内部属性找到相同
        if (source.indexOf(target[key]) > -1 || findLoop(target[key], source)) {
          return true;
        }
      }
    }
    return false;
  }
  // 如果传入值是对象，则执行判断，否则返回false
  return typeof obj === "object" ? findLoop(obj, []) : false;
}
var obj1 = { a: "1" };
obj1.b = {};
obj1.b.a = obj1.b;
var obj2 = { a: { c: "1" } };
obj2.a.b = obj2;
var obj3 = { a: 1, b: 2, c: { d: 4 }, d: {}, e: {} };

var obj1 = { a: "1" };
obj1.b = {};
obj1.b.a = obj1.b;
obj1.b.b = obj1.b;

var obj1 = { a: "1" };
obj1.b = {};
obj1.b.a = obj1.b;
obj1.b.b = obj1.b;

var obj4 = { a: "1" };
obj4.b = { c: 1 };
obj4.aa = obj4.b;
obj4.bb = obj4.b;

var obj5 = { a: "1" };
obj5.b = {};
obj5.b.a = obj5.b;
obj5.b.b = obj5.b;

var b = {};
var obj6 = {
  a1: b,
  a2: {
    a3: b,
  },
};

console.log(isLoop(obj1));
console.log(hasLoop(obj1));
console.log(isLoop(obj3));
console.log(hasLoop(obj3));
// console.log(isLoop(obj2));
// console.log(isLoop(obj3));
// console.log(isLoop(obj4));
// console.log(isLoop(obj5));
// console.log(isLoop(obj6));
