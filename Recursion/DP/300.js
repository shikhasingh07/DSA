function backtracking(nums, n, idx, prev, memo) {
  if (idx === n) {
    return 0;
  }

  const key = memo[idx][prev];
  if (key !== -1) return key;

  let skip = backtracking(nums, n, idx + 1, prev, memo);

  if (prev === 0 || nums[idx] > nums[prev - 1]) {
    let take = 1 + backtracking(nums, n, idx + 1, idx + 1, memo);
    if (take > skip) skip = take;
  }
  memo[idx][prev] = skip;
  return skip;
}
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const memo = Array.from({ length: n }, () => new Int16Array(n + 1).fill(-1));
  return backtracking(nums, nums.length, 0, 0, memo);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
