function isVisited(grid, visit, row, col) {
  let rows = grid.length;
  let cols = grid[0].length;
  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    grid[row][col] === 0
  ) {
    return 1;
  }

  let key = row + "," + col;

  // already visited
  if (visit.has(key)) return 0;

  // mark visited
  visit.add(key);

  let perimeter = 0;
  // explore 4 directions
  perimeter += isVisited(grid, visit, row + 1, col); // down
  perimeter += isVisited(grid, visit, row - 1, col); // up
  perimeter += isVisited(grid, visit, row, col + 1); // right
  perimeter += isVisited(grid, visit, row, col - 1); // left

  return perimeter;
}
var islandPerimeter = function (grid) {
  let visit = new Set();
  let len = grid.length;
  let collen = grid[0].length;
  for (let row = 0; row < len; row++) {
    for (let col = 0; col < collen; col++) {
      if (grid[row][col] === 1) {
        return isVisited(grid, visit, row, col);
      }
    }
  }
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
);
