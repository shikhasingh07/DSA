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

var countSubstrings = function (s) {
  //from normal approach
  let n = s.length;
  let maxCount = 0;

  const t = Array.from({ length: n }, () => Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (backtracking(s, i, j, t)) {
        maxCount++;
      }
    }
  }

  return maxCount;
};

console.log(countSubstrings("abc"));
