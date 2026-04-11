function bracktracking(nums, idx, t, memo) {
  if (t === 0) return true;

  if (idx === nums.length || t < 0) {
    return false;
  }

  const key = idx + "|" + t;
  if (memo.has(key)) return memo.get(key);

  let take = bracktracking(nums, idx + 1, t - nums[idx],memo);

  if (take) {
    memo.set(key, true);
    return true;
  }

  let skip = bracktracking(nums, idx + 1, t,memo);
  const ans = take || skip;
  memo.set(key, ans);
  return ans;
}

var canPartition = function (nums) {
  let sum = nums.reduce((num, acc) => num + acc);

  if (sum % 2 !== 0) return false;

  let target = Math.floor(sum / 2);
  const memo = new Map();
  return bracktracking(nums, 0, target, memo);
};

console.log(canPartition([1, 5, 11, 5]));
