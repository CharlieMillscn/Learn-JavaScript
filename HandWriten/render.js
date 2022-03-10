function render(template, data) {
  const reg = /\$\{(\w+)\}/; // 模板字符串正则
  let temp;
  while ((temp = reg.exec(template))) {
    const name = temp[1];
    template = template.replace(temp[0], data[name]);
  }
  return template; // 如果模板没有模板字符串直接返回
}
let template = "我是${name}，年龄${age} ${sss}";
let data = {
  name: "姓名",
  age: 18,
};
console.log(render(template, data)); // 我是姓名，年龄18，性别undefined
