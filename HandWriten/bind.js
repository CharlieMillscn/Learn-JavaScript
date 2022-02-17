Function.prototype.myBind = function (context, ...outerArgs) {
  // this->func context->obj outerArgs->[10,20]
  let self = this;

  // 返回一个函数
  return function f(...innerArgs) {
    if (self instanceof f) {
      return new self(...outerArgs, ...innerArgs);
    }
    return self.apply(context, [...outerArgs, ...innerArgs]);
  };
};
let obj = {
  name: "张三",
};
func.bind(obj, 10, 20);
function func(...params) {
  console.log(params);
}
