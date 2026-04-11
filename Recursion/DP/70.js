function dp(n, arr) {
  if (n <= 2) return n;

  if (n === 1) return 1;
  if (n === 2) return 2;

  if (arr[n] !== 0) return arr[n];

  arr[n] = dp(n - 1, arr) + dp(n - 2, arr);
  return arr[n];
}
var climbStairs = function (n) {
  return dp(n, new Array(n + 1).fill(0));
};

console.log(climbStairs(5));
