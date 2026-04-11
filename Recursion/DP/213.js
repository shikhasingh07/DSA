function backtracking(idx, nums, memo) {
  if (idx >= nums.length) {
    return 0;
  }

  if (memo[idx] !== undefined) {
    return memo[idx];
  }
  let rob = nums[idx] + backtracking(idx + 2, nums, memo);
  let skip = backtracking(idx + 1, nums, memo);

  let max = Math.max(rob, skip);
  memo[idx] = max;
  return memo[idx];
}
var rob = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  let numsA = nums.slice(0, n - 1);
  let numsB = nums.slice(1);
  const memoA = new Array(numsA.length);
  const memoB = new Array(numsB.length);
  const bestA = backtracking(0, numsA, memoA);
  const bestB = backtracking(0, numsB, memoB);
  return Math.max(bestA, bestB);
};

console.log(rob([2, 3, 2]));
