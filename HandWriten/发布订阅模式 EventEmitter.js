// 题目描述：

// 创建一个 EventEmitter，承担全局事件总线功能
// 实现 on 事件监听方法
// 实现 emit 事件订阅方法
/*
  发布-订阅模式可以类比我们生活当中订报纸的过程。
  订阅者要想获得报纸，必须经过报社；
  报纸厂想要派发报纸，也必须经过报社。
  报社在整个过程中起到“中介”的作用，这也正是事件中心的职责所在。
*/

class EventEmitter {
  constructor() {
    // handlers是一个map，用于存储事件与回调之间的对应关系
    this.handlers = {};
  }
  // on方法用于安装事件监听器，它接受目标事件名和回调函数作为参数
  on(eventName, cb) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(cb);
  }
  emit(eventName, ...args) {
    if (this.handlers[eventName]) {
      this.handlers[eventName].forEach((cb) => {
        cb(...args);
      });
    }
  }
}

let em = new EventEmitter();

function workDay() {
  console.log("每天工作");
}
function makeMoney() {
  console.log("赚100万");
}
function sayLove() {
  console.log("向喜欢的人示爱");
}
em.on("money", makeMoney);
em.on("money", sayLove);

em.emit("money");
