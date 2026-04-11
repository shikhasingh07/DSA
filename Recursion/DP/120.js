function bracktracking(triangle, row, col, n, memo) {
  const key = row + "|" + col;
  if (memo.has(key)) return memo.get(key);

  if (row === n - 1) {
    memo.set(key, triangle[row][col]);
    return triangle[row][col];
  }

  let down = bracktracking(triangle, row + 1, col, n, memo);
  let diag = bracktracking(triangle, row + 1, col + 1, n, memo);

  const res = triangle[row][col] + Math.min(down, diag);
  memo.set(key, res);
  return res;
}
var minimumTotal = function (triangle) {
  let n = triangle.length;
  if (n === 0) return 0;
  const memo = new Map();
  return bracktracking(triangle, 0, 0, n, memo);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
