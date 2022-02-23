var buildTree = function (inorder, postorder) {
  if (!postorder.length) return null;

  let root = new TreeNode(postorder[postorder.length - 1]);

  let index = inorder.findIndex((number) => number === root.val);

  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
  root.right = buildTree(
    inorder.slice(index + 1, inorder.length),
    postorder.slice(index, postorder.length - 1)
  );

  return root;
};
