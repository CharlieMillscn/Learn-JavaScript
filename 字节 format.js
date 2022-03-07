const obj = {
  data: [
    ["xiaoming", "male", "18", "beijing", "2020-01-02"],
    ["xiaofang", "female", "18", "shanghai", "2020-03-02"],
  ],
  columns: [
    { name: "name", note: "" },
    { name: "gender", note: "" },
    { name: "age", note: "" },
    { name: "address", note: "" },
    { name: "registerTime", note: "" },
  ],
};
function format(obj) {
  const data = {},
    columns = [];
  res = [];
  obj.columns.map((element) => {
    data[element["name"]] = element["note"];
    columns.push(element["name"]);
  });
  obj.data.map((element) => {
    const temp = Object.create(data);
    element.map((item, key) => {
      console.log(item, key);
      temp[columns[key]] = item;
    });
    res.push(temp);
  });
  return res;
}
console.log(format(obj));
