function dfs(grid, row, col, visit) {
  let rows = grid.length;
  let cols = grid[0].length;

  if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 0) {
    return 0;
  }

  let key = row + "," + col;

  // already visited
  if (visit.has(key)) return 0;

  // mark visited
  visit.add(key);

  return (
    grid[row][col] +
    dfs(grid, row + 1, col, visit) +
    dfs(grid, row - 1, col, visit) +
    dfs(grid, row, col + 1, visit) +
    dfs(grid, row, col - 1, visit)
  );
}
var findMaxFish = function (grid) {
  let visit = new Set();
  let max = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] > 0 && !visit.has(row + "," + col)) {
        let land = dfs(grid, row, col, visit);
        max = Math.max(max, land);
      }
    }
  }
  return max;
};
grid = [
  [0, 2, 1, 0],
  [4, 0, 0, 3],
  [1, 0, 0, 4],
  [0, 3, 2, 0],
];
console.log(findMaxFish(grid));
