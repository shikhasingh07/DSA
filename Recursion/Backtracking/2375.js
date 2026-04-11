function backtracking(str, idx, path, n, used) {
  if (idx === n + 1) {
    return path.join("");
  }

  for (let d = 1; d <= n + 1; d++) {
    if (used[d]) continue;

    if (idx > 0) {
      const prev = path[idx - 1];
      if (str[idx - 1] === "I" && !(prev < d)) {
        continue;
      }
      if (str[idx - 1] === "D" && !(prev > d)) {
        continue;
      }
    }
    path.push(d);
    used[d] = true;

    // recurse: if returns a string (truthy), bubble it up
    const res = backtracking(str, idx + 1, path, n, used);
    if (res) return res;

    // undo
    path.pop();
    used[d] = false;
  }
  return false;
}

var smallestNumber = function (pattern) {
  let n = pattern.length;
  let ans = backtracking(pattern, 0, [], n, new Array(n + 2).fill(false));
  return ans || "";
};

console.log(smallestNumber("IIIDIDDD"));
