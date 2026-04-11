function isCount(grid, row, col, visit) {
  let rows = grid.length;
  let cols = grid[0].length;

  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    grid[row][col] === 0
  ) {
    return;
  }

  let key = row + "," + col;

  // already visited
  if (visit.has(key)) return 0;

  // mark visited
  visit.add(key);

  grid[row][col] = 0;
  isCount(grid, row + 1, col, visit);
  isCount(grid, row - 1, col, visit);
  isCount(grid, row, col + 1, visit);
  isCount(grid, row, col - 1, visit);
}
var numEnclaves = function (grid) {
  let visit = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (
        grid[row][col] === 1 &&
        (row === 0 ||
          row === grid.length - 1 ||
          col === 0 ||
          col === grid[0].length - 1) &&
        !visit.has(row + "," + col)
      ) {
        isCount(grid, row, col, visit);
      }
    }
  }

  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        count++;
      }
    }
  }
  console.log(count)
  return count;
};

let grid = [
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
console.log(numEnclaves(grid));
