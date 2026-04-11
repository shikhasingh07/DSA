function backtracking(s, n, idx, numSet, count) {
  if (idx === n) {
    return count;
  }

  let best = count;

  for (let i = idx; i < n; i++) {
    const current = s.slice(idx, i + 1);
    if (numSet.has(current)) continue;

    numSet.add(current);
    const res = backtracking(s, n, i + 1, numSet, count + 1);
    console.log({res})
    if (res > best) best = res;

    numSet.delete(current);
  }

  return best;
}

var maxUniqueSplit = function (s) {
  var numSet = new Set();
  return backtracking(s, s.length, 0, numSet, 0);
};

console.log(maxUniqueSplit("ababccc"));
