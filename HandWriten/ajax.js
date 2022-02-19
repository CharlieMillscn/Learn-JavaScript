function ajax0(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        let string = request.responseText;
        //JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象
        let object = JSON.parse(string);
        console.log(object);
      }
    }
  };
  xhr.send();
}
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.response.responseText));
        } else {
          reject("error");
        }
      }
    };
    xhr.send();
  });
  return p;
}
ajax("http://c.3g.163.com/nc/video/list/VAP4BFR16/y/0-10.html").then((res) => {
  console.log(res);
});
