function camelFunc(val) {
  var arr = val.split("-");
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length);
  }
  return arr.join("");
}
console.log(camelFunc("ss-abc-gc-cc")); //ssAbcGcCc
