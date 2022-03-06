function parseParam(url) {
  const paramStr =
    url.indexOf("?") != -1 ? url.slice(url.indexOf("?") + 1, -1) : "";
  const paramArr = paramStr.split("&");
  let paramObj = {};
  paramArr.forEach((param) => {
    if (param.includes("=")) {
      let [key, val] = param.split("=");
      val = decodeURIComponent(val);
      // val = /^\d+$/.test(val)
      val = !isNaN(parseFloat(val, 10)) ? parseFloat(val) : val;

      if (paramObj.hasOwnProperty(key)) {
        paramObj[key] = [].concat(paramObj[key], val);
      } else {
        paramObj[key] = val;
      }
    } else {
      paramObj[param] = true;
    }
  });
  return paramObj;
}
console.log(
  parseParam(
    "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled"
  )
);
