function Queue() {
  this.arr = [];
  this.timeArr = [];
  this.curTime = 0;
}

Queue.prototype.task = function (time, fn) {
  this.curTime += time;
  this.arr.push([this.curTime, fn]);
  return this;
};

Queue.prototype.start = function () {
  let i = 0;
  for (let item of this.arr) {
    this.timeArr[i++] = setTimeout(item[1], item[0]);
  }
};

Queue.prototype.stop = function () {
  for (let item of this.timeArr) {
    clearTimeout(item);
  }
};
const q = new Queue();

q.task(1000, () => {
  console.log(1);
})
  .task(2000, () => {
    console.log(2);
  })
  .task(1000, () => {
    console.log(3);
  })
  .start();
