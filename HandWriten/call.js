Function.prototype.myCall = function (context = window, ...args) {
  // this-->func  context--> obj  args--> 传递过来的参数
  let key = Symbol("key");
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
};
function f(a, b) {
  console.log(a + b);
  console.log(this.name);
}
let obj = {
  name: 1,
};
f.myCall(obj, 1, 2); //否则this指向window
