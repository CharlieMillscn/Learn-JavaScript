function pp(str) {
  var re = /<.*?>(.*?)<\/(.*?)>/g;
  var arr = [];
  while ((result = re.exec(str)) != null) {
    console.log(result);
    arr.push(result[1]);
  }
  console.log(arr);
}
pp("<div>abc</div><li>cba</li>");
