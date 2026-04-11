function backtracking(n, idx, ans, used) {
  if (idx === ans.length) return true;

  if (ans[idx] !== 0) return backtracking(n, idx + 1, ans, used);

  for (let i = n; i >= 1; i--) {
    if (used[i]) continue;

    if (i === 1) {
      ans[idx] = 1;
      used[1] = true;
      if (backtracking(n, idx + 1, ans, used)) return true;
      ans[idx] = 0;
      used[1] = false;
    } else {
      let j = idx + i;
      if (j < ans.length && ans[j] === 0) {
        ans[idx] = i;
        ans[j] = i;
        used[i] = true;

        if (backtracking(n, idx + 1, ans, used)) return true;
        ans[idx] = 0;
        ans[j] = 0;
        used[i] = false;
      }
    }
  }
  return false;
}

var constructDistancedSequence = function (n) {
  let ans = new Array(2 * n - 1).fill(0);
  let used = new Array(n + 1).fill(false);
  backtracking(n, 0, ans, used);
  return ans;
};
console.log(constructDistancedSequence(3));
