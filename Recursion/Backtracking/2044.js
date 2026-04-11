function backtracking(nums, n, idx, target, count) {
  if (idx === n) {
    return count === target ? 1 : 0;
  }

  let currentCount = backtracking(nums, n, idx + 1, target, count);

  currentCount += backtracking(nums, n, idx + 1, target, count | nums[idx]);

  return currentCount;
}

var countMaxOrSubsets = function (nums) {
  let maxXOR = 0;
  for (let i = 0; i < nums.length; i++) {
    maxXOR |= nums[i];
  }

  return backtracking(nums, nums.length, 0, maxXOR, 0);
  
};

console.log(countMaxOrSubsets([3, 1]));
