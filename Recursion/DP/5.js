function backtracking(s, i, j, t) {
  if (i >= j) {
    return true;
  }

  if (t[i][j] !== undefined) {
    return t[i][j];
  }

  if (s[i] === s[j]) {
    return (t[i][j] = backtracking(s, i + 1, j - 1, t));
  }

  return (t[i][j] = false);
}

var longestPalindrome = function (s) {
  let n = s.length;
  if (n < 2) return s;
  let best = -1;
  let sp = 0;

  const t = Array.from({ length: n }, () => Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (backtracking(s, i, j, t)) {
        if (j - i + 1 > best) {
          best = j - i + 1;
          sp = i;
        }
      }
    }
  }
  return s.substring(sp, sp + best);
};

console.log(longestPalindrome("babad"));
