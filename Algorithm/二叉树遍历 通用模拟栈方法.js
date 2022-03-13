var Traversal = function (root) {
  const result = [],
    stack = [];
  if (root) stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    if (node != null) {
      // 前序
      if (node.right) stack.push(node.right);
      stack.push(node);
      stack.push(null);
      if (node.left) stack.push(node.left);
      // 中序
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
      stack.push(node);
      stack.push(null);
      // 后序
      stack.push(node);
      stack.push(null);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    } else {
      node = stack.pop();
      result.push(node.val);
    }
  }
  return result;
};
