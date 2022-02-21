class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
const path = [];
const getPathToTarget = (node, target, path) => {
  if (!node) return false;
  path.push(node.val);
  if (target.val === node.val) return true;
  if (getPathToTarget(node.left, target, path)) return true;
  if (getPathToTarget(node.right, target, path)) return true;
  path.pop();
  return false;
};
let hasPath = getPathToTarget(root, new TreeNode(4), path);
console.log(path);
