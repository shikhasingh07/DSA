function combinationSum(candidates, index, current, target, ans) {
  if (target === 0) {
    ans.push([...current]);
    return;
  }

  if (target < 0 || index === candidates.length) return;

  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) continue;

    if (candidates[i] > target) break;

    current.push(candidates[i]);
    combinationSum(candidates, i + 1, current, target - candidates[i], ans);
    current.pop();
  }
}

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let ans = [];
  combinationSum(candidates, 0, [], target, ans);
  return ans;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
