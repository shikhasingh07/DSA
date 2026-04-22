const TwoSumLessThanK = (nums, k) => {
  nums.sort((a, b) => a - b);

  let left = 0,
    right = nums.length - 1;
  let max = -1;
  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum < k) {
      max = Math.max(max, sum);
      left++;
    } else if (sum >= k) {
      right--;
    }
  }
  return max;
};
let nums = [34, 23, 1, 24, 75, 33, 54, 8],
  k = 58;
console.log(TwoSumLessThanK(nums, k));
