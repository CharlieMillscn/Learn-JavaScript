/**
 * 编程题
 * 写一个函数 判断类型
 * function({} , {}) true
 * function(1 , 1) true
 * function('s' , 's') true
 * function([] , []) true
 * function(function () , function ()) false
 */

const compare = (a, b) => {
  if (a === b) {
    return true;
  }

  if ((typeof a === typeof b) === "function") {
    return false;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!compare(a[i], b[i])) return false;
    }
    return true;
  }

  if (a instanceof Object && b instanceof Object) {
    for (const a_key in a) {
      if (!compare(a[a_key], b[a_key])) return false;
    }
    return true;
  }
};
console.log(compare([1, 2, { 1: 6 }], [1, 2, { 1: 7 }]));
// console.log(
//   compare(
//     {
//       a: 1,
//       b: 1,
//       c: {
//         d: 3,
//       },
//     },
//     {
//       a: 1,
//       b: 1,
//       c: {
//         d: 7,
//       },
//     }
//   )
// );
