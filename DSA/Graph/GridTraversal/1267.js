var countServers = function (grid) {
  let row = grid.length;
  let col = grid[0].length;

  let rowCount = new Array(row).fill(0);
  let colCount = new Array(col).fill(0);

  for(let i = 0 ; i < grid.length;i++){
    for(let j = 0 ; j < grid[0].length;j++){
        if(grid[i][j] === 1){
            rowCount[i]++;
            colCount[j]++;
        }
    }
  }
  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (
        grid[i][j] === 1 &&
        (rowCount[i] > 1 || colCount[j] > 1)
      ) {
        count++;
      }
    }
  }

  return count;
};

console.log(
  countServers([
    [1, 0],
    [1, 1],
  ]),
);
