var firstMissingPositive = function (nums) {
  let set = new Set(nums);
  for (let num = 1; num <= nums.length; num++) {
    if (!set.has(num)) {
      return num;
    }
  }
  return nums.length + 1;
};
let nums = [1, 2, 3];

console.log(firstMissingPositive(nums));
