function backtracking(arr, n, idx, set) {
  if (idx === n) return set.size;

  //skip 
  let best = backtracking(arr, n, idx + 1, set);

  let s = arr[idx];
  let canuse = true;
  for (let c of s) {
    if (set.has(c)) {
      canuse = false;
      break;
    }
  }

  //include 
  if (canuse) {
    for (let c of s) set.add(c);
    best = Math.max(best, backtracking(arr, n, idx + 1, set));
    for (let c of s) set.delete(c);
  }

  return best;
}

var maxLength = function (arr) {
  let set = new Set();
  arr = arr.filter((s) => new Set(s).size === s.length);
  let n = arr.length;
  return backtracking(arr, n, 0, set);
};

console.log(maxLength(["un","iq","ue"]));
