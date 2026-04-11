function backtracking(n, dp) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  if (dp[n] !== 0) return dp[n];

  dp[n] =
    backtracking(n - 1, dp) + backtracking(n - 2, dp) + backtracking(n - 3, dp);
  return dp[n];
}

var tribonacci = function (n) {
  return backtracking(n, new Array(n + 1).fill(0));
};

console.log(tribonacci(4));
