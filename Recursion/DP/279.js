function backtracking(n, memo) {
  if (n === 0) return 0;
  if (n < 0) return Infinity;

  if (memo.has(n)) return memo.get(n);

  let count = Infinity;
  for (let i = 1; i * i <= n; i++) {
    let s = i * i;
    count = Math.min(count, 1 + backtracking(n - s,memo));
  }
  memo.set(n, count);
  return count;
}

var numSquares = function (n) {
  return backtracking(n, new Map());
};

console.log(numSquares(12));
