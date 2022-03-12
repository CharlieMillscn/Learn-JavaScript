Array.prototype.indexOf = function (b) {
  //参数校验
  if (Object.prototype.toString.call(b) !== "[object Array]")
    return new Error("array expected");
  //b的长度比本数组长度长了就直接返回
  if (this.length < b.length) return -1;

  var index = 0, //本数组游标
    i = 0,
    len = b.length;
  while (index < this.length) {
    if (this.length - index < b.length) return -1;
    for (i = 0; i < len; ++i) {
      if (this[index + i] !== b[i]) break;
    }
    if (i === b.length) return index;
    index++;
  }
};
