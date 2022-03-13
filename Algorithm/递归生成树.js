const initTree = (parent_id) => {
  // jsonArray 变量数据
  // 第一次以后：根据id去查询parent_id相同的（相同为子数据）
  // 第一次：查找所有parent_id为-1的数据组成第一级
  const child = jsonArray.filter((item) => item.parent_id == parent_id);
  // 第一次：循环parent_id为-1数组
  return child.map((item) => ({
    ...item,
    // 当前存在id（id与parent_id应该是必须有的）调用initTree() 查找所有parent_id为本id的数据
    // childs字段写入
    childs: initTree(item.id),
  }));
};
// 首先调用initTree方法查找所有parent_id为-1的（-1认为是第一级）
const tree = initTree(-1);
console.log(tree);
