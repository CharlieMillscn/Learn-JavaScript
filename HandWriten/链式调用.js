function _Man(name) {
  this.name = name;
  this.queue = [];
  const self = this;
  setTimeout(() => {
    self.next();
  });
}

_Man.prototype.next = function () {
  const fn = this.queue.shift();
  fn && fn();
};

_Man.prototype.eat = function (something) {
  const self = this;
  this.queue.push(() => {
    console.log(`eat ${something}`);
    self.next();
  });
  return this;
};

_Man.prototype.wait = function (time) {
  const self = this;
  this.queue.push(() => {
    setTimeout(() => {
      self.next();
    }, time);
  });
  return this;
};

function Man(name) {
  return new _Man(name);
}

new Man("pcd").eat("lunch").wait(1000).eat("dinner");
