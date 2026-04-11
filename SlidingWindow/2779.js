var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let count = 0;
  for (let right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > 2 * k) {
      left++;
    }

    count = Math.max(right - left + 1, count);
  }

  return count;
};

console.log(maximumBeauty([4, 6, 1, 2], 2));
