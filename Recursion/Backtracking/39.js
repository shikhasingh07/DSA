function sums(candidates, index, current, target, ans) {
  let sum = current.reduce((a, b) => a + b, 0);
  if (sum === target) {
    ans.push([...current]);
    return;
  }
  if (sum > target || index === candidates.length) {
    return 
  }

  sums(candidates, index + 1, current, target, ans);
  current.push(candidates[index]);

  sums(candidates, index, current, target, ans);
  current.pop();
}

var combinationSum = function (candidates, target) {
  let ans = [];
  sums(candidates, 0, [], target, ans);
  return ans;
};

console.log(combinationSum([2, 3, 6, 7], 7));
