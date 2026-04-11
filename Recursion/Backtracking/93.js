function restore(s, idx, current, ans) {
  if (current.length > 4) {
    return;
  }

  if (s.length === idx && current.length === 4) {
    ans.push(current.join("."));
    return;
  }

  for (let i = 1; i <= 3; i++) {
    if (idx + i > s.length) break;
    let sub = s.substring(idx, idx + i);
    if (sub.length > 1 && sub[0] === "0") continue;
    if (i === 3 && Number(sub) > 255) continue;

    current.push(sub);
    restore(s, idx + i, current, ans);
    current.pop();
  }
}

var restoreIpAddresses = function (s) {
  var ans = [];
  restore(s, 0, [], ans);
  return ans;
};

console.log(restoreIpAddresses("25525511135"));
