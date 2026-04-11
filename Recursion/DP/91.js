function backtracking(s, n, idx, memo) {
  if (idx === n) {
    return 1;
  }

  if (s[idx] === "0") {
    return 0;
  }

  if (memo[idx] !== undefined) return memo[idx];

  // take one digit
  let ways = backtracking(s, n, idx + 1, memo);

  // take two digits if valid (10..26)
  if (
    idx + 1 < n &&
    (s[idx] === "1" || (s[idx] === "2" && s[idx + 1] <= "6"))
  ) {
    ways += backtracking(s, n, idx + 2, memo);
  }

  return (memo[idx] = ways);
}

var numDecodings = function (s) {
  if (!s || s.length === 0) return 0;
  return backtracking(s, s.length, 0, new Array(s.length));
};

console.log(numDecodings("12"));
