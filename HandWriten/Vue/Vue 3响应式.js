function reactive(target) {
  if (typeof target !== "object" || target === null) {
    return target;
  }
  const observed = new Proxy(target, {
    get(target, key) {
      const ownKeys = Reflect.ownKeys(target);
      if (ownKeys.includes(key)) {
        console.log("get", key); // 监听
      }
      const result = Reflect.get(target, key);
      return reactive(result);
    },
    set(target, key, val) {
      if (val === target[key]) {
        return true;
      }
      const ownKeys = Reflect.ownKeys(target);
      if (ownKeys.includes(key)) {
        console.log("已有的 key", key);
      } else {
        console.log("新增的 key", key);
      }
      const result = Reflect.set(target, key, val);
      console.log("set", key, val);
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      console.log("delete property", key);
      // console.log('result', result) // true
      return result; // 是否删除成功
    },
  });
  return observed;
}
// 测试数据
const data = {
  name: "zhangsan",
  age: 20,
  info: {
    city: "beijing",
    a: {
      b: {
        c: {
          d: {
            e: 100,
          },
        },
      },
    },
  },
};

const proxyData = reactive(data);
console.log(data.info);
