function reverse(nums, left, right) {
  while (left < right) {
    let tem = nums[left];
    nums[left] = nums[right];
    nums[right] = tem;
    left++;
    right--;
  }
}
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  let j = nums.length - 1;
  if (i >= 0) {
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  reverse(nums, i + 1, nums.length - 1);
  return nums;
};

let nums = [3, 2, 1];
console.log(nextPermutation(nums));
