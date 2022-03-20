function revert(num) {
  let numbers = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  let counts = ["十", "百", "千", "万"];
  let arr = [];
  while (num) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  console.log(arr);
  let res = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      if (arr[i + 1] === 0) {
        res += numbers[0];
      }
      res += numbers[arr[i]];
      if (i >= 1) {
        res += counts[i - 1];
      }
    }
  }
  return res;
}
console.log(revert(12345));
