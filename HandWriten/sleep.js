/*
  实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒。
*/
const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
sleep(1000).then(() => {
  console.log(12561);
});
