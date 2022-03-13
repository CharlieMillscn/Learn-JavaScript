const data = {
  id: 1,
  children: [
    { id: 2, children: [{ id: 3, children: [] }] },
    {
      id: 4,
      children: [
        { id: 5, children: [] },
        { id: 6, children: [] },
      ],
    },
    { id: 7, children: [] },
  ],
};
const path = [data.id];
let res = [];
const dfs = (node, target) => {
  if (node.id === target) {
    console.log(123);
    res = [].concat(path);
  }
  for (let i = 0; i < node.children.length; i++) {
    path.push(node.children[i].id);
    dfs(node.children[i], target);
    path.pop();
  }
};
dfs(data, 5);
console.log(res);
