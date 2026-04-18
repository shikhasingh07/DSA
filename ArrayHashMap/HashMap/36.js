var isValidSudoku = function (board) {
  let rowMap = {};
  let colMap = {};
  let boxMap = {};
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === ".") continue;
      let val = board[row][col];

      let box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      let rKey = row + "-" + val;
      let cKey = col + "-" + val;
      let bKey = box + "-" + val;

      if (rowMap[rKey] || colMap[cKey] || boxMap[bKey]) {
        return false;
      }

      rowMap[rKey] = true;
      colMap[cKey] = true;
      boxMap[bKey] = true;
    }
  }
  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
