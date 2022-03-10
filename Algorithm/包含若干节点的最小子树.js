const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [],
    },
    {
      val: 3,
      children: [
        {
          val: 5,
          children: [
            {
              val: 6,
              children: [],
            },
            {
              val: 7,
              children: [],
            },
          ],
        },
      ],
    },
    {
      val: 4,
      children: [],
    },
  ],
};

const target = [5, 7];

const getChildren = (root) => {
  const res = [];
  const dfs = (root) => {
    root.children.length &&
      root.children.forEach((node) => {
        res.push(node.val);
        dfs(node);
      });
  };
  dfs(root);
  return res;
};

const check = (target, nums) => {
  for (const item of target) {
    if (!nums.includes(item)) return false;
  }
  return true;
};

const getMinNode = (root) => {
  let res = null;
  let max = 0;
  const dfs = (root, path) => {
    path++;
    const children = getChildren(root);
    if (check(target, children) && path > max) {
      res = root;
      max = path;
    }
    root.children.forEach((node) => {
      dfs(node, path);
    });
  };
  dfs(root, 0);
  return res;
};

const node = getMinNode(tree, target);
console.log(node);
