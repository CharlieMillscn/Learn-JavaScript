// Object.is(0, -0);            // false
// Object.is(+0, -0);           // false
// Object.is(0, +0);            // true
// Object.is(NaN, 0/0);         // true
Object.is = function (x, y) {
  if (x === y) {
    // 1/+0 = +Infinity， 1/-0 = -Infinity, +Infinity不等于-Infinity
    // Infinity 属性用于存放表示正无穷大的数值。负无穷大是表示负无穷大一个数字值。
    return x !== 0 || 1 / x === 1 / y;
  }
  // 一个变量不等于自身变量,那么它一定是 NaN
  // 两个都是NaN的时候返回true
  return x !== x && y !== y;
};
