function backtracking(s, n, idx, first, count) {
  if (idx === n) {
    return count >= 2;
  }

  let next = first - 1n;
  let curr = "";

  for (let i = idx; i < n; i++) {
    curr += s[i];
    console.log("--------",{curr});
    let num = BigInt(curr);
    if (num === next) {
      if (backtracking(s, n, i + 1, num, count + 1)) return true;
    }
  }
  return false;
}

var splitString = function (s) {
  let n = s.length;
  for (let i = 1; i < n; i++) {
    const first = BigInt(s.slice(0, i));
     console.log("----First----",{first});
    if (backtracking(s, n, i, first, 1)) return true;
  }
  return false;
};
console.log(splitString("050043"));
