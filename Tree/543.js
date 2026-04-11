var diameterOfBinaryTree = function (root) {
  let max = 0;

  function backtracking(root) {
    if (!root) {
      return 0;
    }

    let left = backtracking(root.left);
    let right = backtracking(root.right);

    max = Math.max(max, left + right);
    return 1 + Math.max(left, right);
  }
  backtracking(root)
  return max;
};
console.log(diameterOfBinaryTree([1, 2, 3, 4, 5]));
