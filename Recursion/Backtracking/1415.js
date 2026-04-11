function getString(n, idx, current, ans, set, k) {
  if (idx === n) {
    ans.push(current.join(""));
    return;
  }

  for (let ch of set) {
    if (idx > 0 && current[current.length - 1] === ch) continue;
    current.push(ch);
    getString(n, idx + 1, current, ans, set);
    current.pop();
  }
}

var getHappyString = function (n, k) {
  const total = k * Math.pow(2, n - 1);
  if (k > total) return "";

  let ans = [];
  let set = ["a", "b", "c"];
  getString(n, 0, [], ans, set, k);
  return ans[k - 1];
};

console.log(getHappyString(3, 9));
