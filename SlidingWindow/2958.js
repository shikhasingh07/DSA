var maxSubarrayLength = function (nums, k) {
  let map = new Map();
  let left = 0;
  let count = 0;
  let max = 0;

  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    while (map.get(nums[right]) > k) {
      map.set(nums[left], (map.get(nums[left]) || 0) - 1);
      left++;
    }

    max = Math.max(right - left + 1, max);
  }
  return max;
};

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2));
