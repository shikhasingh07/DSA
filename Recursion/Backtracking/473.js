function recure(matchsticks, idx, n, ans, tar) {
  if (idx === n) {
    return ans[0] === tar && ans[1] === tar && ans[2] === tar && ans[3] === tar;
  }

  let val = matchsticks[idx];

  for (let i = 0; i < 4; i++) {
    if (ans[i] + val <= tar) {
      ans[i] += val;
      if (recure(matchsticks, idx + 1, n, ans, tar)) {
        return true;
      }
      ans[i] -= val;
    }

    if (ans[i] === 0) break;
  }
  return false;
}

var makesquare = function (matchsticks) {
  let n = matchsticks.length;
  if (n < 4) return false;

  let total = matchsticks.reduce((acc, idx) => acc + idx, 0);
  if (total % 4 !== 0) {
    return false;
  }

  let tar = total / 4;
  matchsticks.sort((a, b) => b - a);
  if (matchsticks[0] > tar) return false;

  let ans = [0, 0, 0, 0];
  return recure(matchsticks, 0, n, ans , tar);
  
};

console.log(makesquare([1, 1, 2, 2, 2]));
