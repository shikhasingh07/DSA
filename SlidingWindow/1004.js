var longestOnes = function (nums, k) {
  let left = 0;
  let max = 0;
  let zero = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zero++;

    while (zero > k) {
      if (nums[left] === 0) {
        zero--;
      }
      left++;
    }

    max = Math.max(right - left + 1, max);
  }
  return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
