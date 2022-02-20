// https://zhuanlan.zhihu.com/p/73204517
function mySetInterval(func, t) {
  const inner = () => {
    const timer = setTimeout(() => {
      func();
      clearTimeout(timer);
      inner();
    }, t);
  };
  inner();
}
mySetInterval(() => {
  console.log(5165);
}, 1000);
