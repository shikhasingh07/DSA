function isVaild(board, row, col, char) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === char) {
      return false;
    }
  }

  for (let j = 0; j < 9; j++) {
    if (board[j][col] === char) {
      return false;
    }
  }

  let startRow = 3 * Math.floor(row / 3);
  let startCol = 3 * Math.floor(col / 3);

  console.log({ startRow, startCol });
  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startCol; c < startCol + 3; c++) {
      if (board[r][c] === char) return false;
    }
  }
  return true;
}

function backtracking(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === ".") {
        for (let char = 1; char <= 9; char++) {
          let ch = String(char);
          let isTrue = isVaild(board, row, col, ch);
          if (isTrue) {
            board[row][col] = ch;
            if (backtracking(board)) return true;
            board[row][col] = ".";
          }
        }
        return false;
      }
    }
  }
  return true;
}

var solveSudoku = function (board) {
  backtracking(board);
  return board;
};

console.log(
  solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
