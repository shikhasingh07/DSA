var removeDuplicates = function (nums) {
  let s = 0,
    f = 1;
  while (f <= nums.length - 1) {
    if (nums[s] !== nums[f]) {
      s++;
      nums[s] = nums[f];
    }
    f++;
  }
  return nums.slice(0, s + 1);
};
let nums = [1, 1, 2];
console.log(removeDuplicates(nums));
