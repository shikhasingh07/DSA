function isSurrond(board, row, col, visit) {
  let rows = board.length;
  let cols = board[0].length;

  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    board[row][col] === "X"
  ) {
    return;
  }

  let key = row + "," + col;

  // already visited
  if (visit.has(key)) return 0;

  // mark visited
  visit.add(key);

  board[row][col] = "#";
  isSurrond(board, row + 1, col, visit);
  isSurrond(board, row - 1, col, visit);
  isSurrond(board, row, col + 1, visit);
  isSurrond(board, row, col - 1, visit);
}

var solve = function (board) {
  let visit = new Set();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (
        board[row][col] === "O" &&
        (row === 0 ||
          row === board.length - 1 ||
          col === 0 ||
          col === board[0].length - 1) &&
        !visit.has(row + "," + col)
      ) {
        isSurrond(board, row, col, visit);
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === "O") {
        board[row][col] = "X"; // surrounded
      } else if (board[row][col] === "#") {
        board[row][col] = "O"; // safe
      }
    }
  }
  console.log(board);
  return board;
};

let board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
console.log(solve(board));
