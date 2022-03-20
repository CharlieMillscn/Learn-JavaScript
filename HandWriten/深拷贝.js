// 检查类型
let checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1);
};

let deepClone = (target) => {
  const type = checkType(target);
  let res;
  if (type === "Object") {
    res = {};
  } else if (type === "Array") {
    res = [];
  } else {
    return target;
  }
  for (let i in target) {
    const tempType = checkType(target[i]);
    if (tempType === "Object" || tempType === "Array") {
      res[i] = deepClone(target[i]);
    } else {
      res[i] = target[i];
    }
  }
  return res;
};
// let arr1 = [1, 2, {age: 18}]
// let arr2 = deepClone(arr1)
// arr2[2].age = 34
// console.log(arr1)

let obj1 = {
  name: "xiecheng",
  hobby: ["coding", "eating"],
};
let obj2 = deepClone(obj1);
obj2.hobby[0] = "sleeping";
console.log(obj1);
console.log(obj2);
