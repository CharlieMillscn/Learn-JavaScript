/* 用于邮箱验证的函数 */
function validateEmail(email) {
  // 邮箱验证正则
  var reg =
    /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  return reg.test(email);
}

// 测试用例
var emailArr = [
  "1234@qq.com",
  "wang@126.com",
  "wang123@126.com",
  "wang123@vip.163.com",
  "wang_email@outlookcom",
  "w.ang.email@gmail.com",
];

var res = emailArr.map(function (item) {
  if (validateEmail(item)) {
    return item + " 有效";
  }
  return item + " 无效";
});
// 测试用例均有效
console.log(res);
