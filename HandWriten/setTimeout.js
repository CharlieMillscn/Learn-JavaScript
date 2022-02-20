const mySetTimeout = (cb, time) => {
  const timer = setInterval(() => {
    cb();
    clearInterval(timer);
  }, time);
};
mySetTimeout(() => {
  console.log(1234);
}, 1500);
