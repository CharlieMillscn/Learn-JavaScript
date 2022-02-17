class MyPromise {
  constructor(fn) {
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    this.state = "PENDING";
    this.value = "";
    fn(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(value) {
    if (this.state == "PENDING") {
      this.state = "RESOLVED";
      this.value = value;

      this.resolvedCallbacks.map((cb) => cb(value));
    }
  }
  reject(value) {
    if (this.state == "PENDING") {
      this.state = "REJECTED";
      this.value = value;

      this.rejectedCallbacks.map((cb) => cb(value));
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== "function") {
      onResolved = function (x) {
        return x;
      };
    }
    if (typeof onRejected !== "function") {
      onRejected = function (e) {
        throw e;
      };
    }
    if (this.state === "PENDING") {
      this.resolvedCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);
    }
    if (this.state === "RESOLVED") {
      onFulfilled(this.value);
    }
    if (this.state === "REJECTED") {
      onRejected(this.value);
    }
    return this;
  }
}
const MyPromise1 = new MyPromise(function (resolve, reject) {
  resolve("成了1！");
});
MyPromise1.then((value) => {
  console.log(value);
  console.log("我是第 1 个任务");
}).then((value) => {
  console.log("我是第 2 个任务");
});

new MyPromise(function (resolve, reject) {
  reject("错了！");
}).then(
  function (value) {
    console.log(value);
  },
  function (reason) {
    console.log(reason);
  }
);
