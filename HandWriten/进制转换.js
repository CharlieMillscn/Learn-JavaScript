var toBin = (n) => {
  if (n == 0) return "0";
  var res = "";
  while (n != 0) {
    res = (n % 2) + res;
    n = parseInt(n / 2);
  }
  return res;
};
var toDecimal = (s) => {
  var res = 0;
  var arr = s.split("");
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    res += +arr[i] * Math.pow(2, len - 1 - i);
  }
  return res;
};
