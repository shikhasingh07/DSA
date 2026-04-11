function backtracking(nums, n, idx, current, k) {
  if (idx === n) {
    return current.size > 0 ? 1 : 0;
  }

  // skiping

  let count = backtracking(nums, n, idx + 1, current, k);
  if (!(current.has(nums[idx] - k) || current.has(nums[idx] + k))) {
    current.add(nums[idx]);
    count += backtracking(nums, n, idx + 1, current, k);
    current.delete(nums[idx]);
  }

  return count;
}

var beautifulSubsets = function (nums, k) {
  nums.sort((a, b) => a - b);

  let n = nums.length;
  return backtracking(nums, n, 0, new Set(), k);
};

console.log(beautifulSubsets([2, 4, 6], 2));
