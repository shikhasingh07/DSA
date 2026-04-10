function dfs(grid1, grid2, row, col, visit) {
  let rows = grid2.length;
  let cols = grid2[0].length;

  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    grid2[row][col] === 0
  ) {
    return true;
  }

  let key = row + "," + col;
  if (visit.has(key)) return true;

  visit.add(key);

  let isValid = true;
  if (grid1[row][col] === 0) {
    isValid = false;
  }

  if (!dfs(grid1, grid2, row + 1, col, visit)) isValid = false;
  if (!dfs(grid1, grid2, row - 1, col, visit)) isValid = false;
  if (!dfs(grid1, grid2, row, col + 1, visit)) isValid = false;
  if (!dfs(grid1, grid2, row, col - 1, visit)) isValid = false;

  return isValid;
}
var countSubIslands = function (grid1, grid2) {
  let visit = new Set();
  let sub = 0;

  for (let row = 0; row < grid2.length; row++) {
    for (let col = 0; col < grid2[0].length; col++) {
      let key = row + "," + col;

      if (grid2[row][col] === 1 && !visit.has(key)) {
        if (dfs(grid1, grid2, row, col, visit)) {
          sub++;
        }
      }
    }
  }

  return sub;
};
let grid1 = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
];
let grid2 = [
  [1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
];
console.log(countSubIslands(grid1, grid2));
