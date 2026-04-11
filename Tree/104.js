var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log([3, 9, 20, null, null, 15, 7]);
