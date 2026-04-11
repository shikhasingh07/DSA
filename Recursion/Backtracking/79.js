function coExist(board, r, c, idx, word, used) {
  if (idx === word.length) return true;

  if (
    r < 0 ||
    r >= board.length ||
    c < 0 ||
    c >= board[0].length ||
    used[r][c] ||
    board[r][c] !== word[idx]
  ) {
    return false;
  }

  used[r][c] = true;

  const found =
    coExist(board, r + 1, c, idx + 1, word, used) ||
    coExist(board, r - 1, c, idx + 1, word, used) ||
    coExist(board, r, c + 1, idx + 1, word, used) ||
    coExist(board, r, c - 1, idx + 1, word, used);

  used[r][c] = false;
  return found;
}

var exist = function (board, word) {
  var rows = board.length;
  var cols = board[0].length;

  const visited = Array.from({ length: rows }, () =>
    new Array(cols).fill(false)
  );

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        if (coExist(board, i, j, 0, word, visited)) return true;
      }
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
