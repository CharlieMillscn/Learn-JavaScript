let rest = function (_data = 4000) {
  return Promise.race([upload(), Timeout(_data)]);
};
function upload() {
  console.log("请求进行中...");
  return new Promise((resolve, reject) => {
    //模拟的接口
    setTimeout(() => {
      resolve({ data: { code: 200, data: [] } });
    }, 2000);
    // 向外暴露取消函数
    cancelFn = function (msg) {
      reject("请求超时，请重试");
    };
  });
}
function Timeout(times) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cancelFn();
    }, times);
  });
}
let res = rest();
res.then((res) => {
  console.log(res);
});
