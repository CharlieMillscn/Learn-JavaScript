function fetchImageWithLimit(imageUrls, limit) {
  // copy一份，作为剩余url的记录
  let urls = [...imageUrls];

  // 用来记录url - response 的映射
  // 保证输出列表与输入顺序一致
  let rs = new Map();

  // 递归的去取url进行请求
  function run() {
    if (urls.length > 0) {
      // 取一个，便少一个
      const url = urls.shift();
      console.log(url, " [start at] ", new Date().getTime() % 10000);
      return fetchImage(url).then((res) => {
        console.log(url, " [end at] ", new Date().getTime() % 10000);
        rs.set(url, res);
        return run();
      });
    }
  }

  // 当imageUrls.length < limit的时候，我们也没有必要去创建多余的Promise
  const promiseList = Array(Math.min(limit, imageUrls.length))
    // 这里用Array.protetype.fill做了简写，但不能进一步简写成.fill(run())
    .fill(Promise.resolve())
    .map((promise) => promise.then(run));

  return Promise.all(promiseList).then(() =>
    imageUrls.map((item) => rs.get(item))
  );
}
const imageUrls = [
  "pic_1.png",
  "pic_2.png",
  "pic_3.png",
  "pic_4.png",
  "pic_5.png",
  "pic_6.png",
];
function fetchImage(url) {
  // 模拟请求的响应时间在0 - 1s之间随机
  const timeCost = Math.random() * 1000;
  return new Promise((resolve) => setTimeout(resolve, timeCost, "get: " + url));
}
fetchImageWithLimit(imageUrls, 2)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
