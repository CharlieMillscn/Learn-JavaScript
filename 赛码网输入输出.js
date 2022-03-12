const helper = (data) => {
  const n = data.length;
  let ans = 0;
  data.forEach((element) => {
    if (element === "1") ans++;
  });
  for (let i = 0; i < n; i++) {
    let temp = +data[i];
    for (let j = i + 1; j < n; j++) {
      temp *= +data[j];
      if (temp === 1) ans++;
    }
  }
  return ans;
};
console.log(helper("-1 1 1".split(" ")));
// let number = readInt(),
//   line = read_line();
// console.log(helper(line.split(" ")));
