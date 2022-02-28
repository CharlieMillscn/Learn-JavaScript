const toThousands = (num = 0) => {
  let result = "";
  let numArr = num.toString().split(".");
  let int = numArr[0];
  let decmial = numArr[1] ? "." + numArr[1] : "";
  for (let n = int.length - 1; n >= 0; n--) {
    result += int[int.length - n - 1];
    if ((int.length - n - 1) % 3 === 0 && n !== 0) {
      result += ",";
    }
  }
  return result + decmial;
};

console.log(toThousands(1234567890)); //1,234,567,890.111

function toThousands1(num = 0) {
  let result = "";
  let numArr = num.toString().split(".");
  let int = numArr[0];
  let decmial = numArr[1] ? "." + numArr[1] : "";
  while (int.length > 3) {
    result = "," + int.slice(-3) + result;
    int = int.slice(0, int.length - 3);
  }
  if (int) {
    result = int + result;
  }
  return result + decmial;
}

console.log(toThousands1(7890.111));
