function countIslands(grid, row, col, visit) {
  let rows = grid.length;
  let cols = grid[0].length;

  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    grid[row][col] === "0"
  ) {
    return;
  }
  let key = row + "," + col;

  // already visited
  if (visit.has(key)) return 0;

  // mark visited
  visit.add(key);

  countIslands(grid, row + 1, col, visit);
  countIslands(grid, row - 1, col, visit);
  countIslands(grid, row, col + 1, visit);
  countIslands(grid, row, col - 1, visit);
}
var numIslands = function (grid) {
  let visited = new Set();
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !visited.has(i + "," + j)) {
        count++;
        countIslands(grid, i, j, visited);
      }
    }
  }
  return count;
};
let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));
