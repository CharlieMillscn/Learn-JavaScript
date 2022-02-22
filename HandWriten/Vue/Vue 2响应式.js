/*
  Vue 2采用数据劫持结合发布—订阅模式的方法，
  通过 Object.defineProperty() 来劫持各个属性的 setter，getter，
  在数据变动时发布消息给订阅者，触发相应的监听回调。
  Object.defineProperty 缺点：
  深度监听，需要递归到底，一次性计算量大
  无法监听新增属性/删除属性(Vue.set Vue.delete )

*/
function updateView() {
  console.log("视图更新");
}
const oldArrayProperty = Array.prototype;
const arrProto = Object.create(oldArrayProperty);
["push", "pop", "shift", "unshift", "splice"].forEach((methodName) => {
  arrProto[methodName] = function () {
    updateView();
    oldArrayProperty[methodName].call(this, ...arguments);
  };
});
function observer(target) {
  if (typeof target !== "object" || target === null) {
    return target;
  }
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}
function defineReactive(target, key, value) {
  observer(value);
  Object.defineProperty(target, key, {
    get() {
      return key;
    },
    set(newKey) {
      if (newKey !== key) {
        observer(newKey);
        key = newKey;
        updateView();
      }
    },
  });
}
const data = {
  name: "zhangsan",
  age: 20,
  info: {
    address: "北京", // 需要深度监听
  },
  nums: [10, 20, 30],
};

// 监听数据
observer(data);
data.age = 1541;
// data.nums.push(4); // 监听数组
