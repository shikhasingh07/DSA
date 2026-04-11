var generate = (result, n, idx, close, curr) => {
  if (curr.length === n * 2) {
    result.push(curr);
    return;
  }

  if (idx < n) {
    generate(result, n, idx + 1, close, curr + "(");
  }

  if (close < idx) {
    generate(result, n, idx, close + 1, curr + ")");
  }
};

var generateParenthesis = function (n) {
  let result = [];

  generate(result, n, 0, 0, "");
  return result;
};

console.log(generateParenthesis(2));
