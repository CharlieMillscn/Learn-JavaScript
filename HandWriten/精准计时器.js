let interval = 1000,
  ms = 50000, //从服务器和活动开始时间计算出的时间差，这里测试用50000ms
  count = 0,
  startTime = new Date().getTime();
if (ms >= 0) {
  var timeCounter = setTimeout(countDownStart, interval);
}
function countDownStart() {
  count++;
  let offset = new Date().getTime() - (startTime + count * interval);
  let nextTime = interval - offset;
  if (nextTime < 0) {
    nextTime = 0;
  }
  ms -= interval;
  console.log("偏差：" + offset + "ms");
  if (ms < 0) {
    clearTimeout(timeCounter);
  } else {
    timeCounter = setTimeout(countDownStart, nextTime);
  }
}
