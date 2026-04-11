function backtracking(nums, n, idx, current, target) {
  if (idx === n) {
    return true;
  }

  let val = nums[idx];
  for (let j = 0; j < nums.length; j++) {
    if (current[j] + val <= target) {
      current[j] += val;
      if (backtracking(nums, n, idx + 1, current, target)) return true;
      current[j] -= val;
    }

    if (current[j] === 0) break;
  }

  return false;
}

var canPartitionKSubsets = function (nums, k) {
  let target = nums.reduce((acc, nums) => acc + nums);
  if (target % k !== 0) {
    return false;
  }

  let total = target / k; 
  nums.sort((a, b) => b - a);

  if (nums[0] > total) {
    return false;
  }
  const n = nums.length;
  return backtracking(nums, n, 0, new Array(k).fill(0), total);
};

console.log(canPartitionKSubsets([2,2,2,2,3,4,5], 4));
