// 节流函数原理:规定在一个单位时间内，只能触发一次函数。
//             如果这个单位时间内触发多次函数，只有一次生效. 时间只按照初次的。
/*
    例:（连续不断动都需要调用时用，设一时间间隔），
    像dom的拖拽，如果用消抖的话，就会出现卡顿的感觉，
    因为只在停止的时候执行了一次，这个时候就应该用节流，
    在一定时间内多次执行，会流畅很多
*/
// const throttle = (func, wait) => {
//   let lastTime = 0;
//   return function (...args) {
//     let now = +new Date();
//     if (now - lastTime > wait) {
//       lastTime = now;
//       func.apply(this, args);
//     }
//   };
// };

const throttle = (func, wait) => {
  let lastTime = 0;
  return function (...args) {
    const now = +new Date();
    if (now - lastTime > wait) {
      lastTime = now;
      func.apply(this, args);
    }
  };
};
