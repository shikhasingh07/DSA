var longestCommonPrefix = function (strs) {
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let str = "";
    for (let j = 0; j < strs[i].length; j++) {
      if (ans[j] === strs[i][j]) {
        str += ans[j];
      }else {
        break;
      }
    }
    ans = str;
  }
  return ans;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
