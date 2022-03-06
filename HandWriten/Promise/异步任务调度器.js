class Scheduler {
  constructor(max) {
    // 最大可并发任务数
    this.max = max;
    // 当前并发任务数
    this.count = 0;
    // 阻塞的任务队列
    this.queue = [];
  }

  async add(fn) {
    if (this.count > this.max) {
      await new Promise((resolve) => {
        this.queue.push(resolve);
      });
    }
    this.count++;
    const result = await fn();
    this.count--;
    this.queue.length && this.queue.shift()();
    return result;
  }
}
