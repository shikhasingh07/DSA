function dfs(i, visit, isConnected) {
  visit.add(i);

  for (let n = 0; n < isConnected.length; n++) {
    if (isConnected[i][n] === 1 && !visit.has(n)) {
      dfs(n, visit, isConnected);
    }
  }
}

var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let visit = new Set();

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visit.has(i)) {
      dfs(i, visit, isConnected);
      count++;
    }
  }
  return count;
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
);
