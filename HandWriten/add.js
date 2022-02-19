/*
  请实现一个 add 函数，满足以下功能:
  add(1); 			// 1
  add(1)(2);  	// 3
  add(1)(2)(3)；// 6
  add(1)(2, 3); // 6
  add(1, 2)(3); // 6
  add(1, 2, 3); // 6
*/
function add(...args) {
  let fn = function (...args1) {
    return add.apply(null, args.concat(args1));
  };

  fn.toString = function () {
    return args.reduce((a, b) => a + b);
  };

  return fn;
}
console.log(add(1)(2)(3).toString());
