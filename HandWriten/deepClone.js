const checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1);
};
const deepClone = (target) => {
  let targetType = checkType(target);
  let result;
  if (targetType === "Object") {
    result = {};
  } else if (targetType === "Array") {
    result = [];
  } else {
    return result;
  }
  for (const key in target) {
    let value = target[key];
    let valueType = checkType(value);
    if (valueType === "Object" || valueType === "Array") {
      result[key] = deepClone(value);
    } else {
      result[key] = value;
    }
  }
  return result;
};
let obj1 = {
  name: "xiecheng",
  hobby: ["coding", "eating"],
};
let obj2 = deepClone(obj1);
obj2.hobby[0] = "sleeping";
console.log(obj1);
console.log(obj2);
