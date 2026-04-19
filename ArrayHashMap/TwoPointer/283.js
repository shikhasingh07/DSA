var moveZeroes = function (nums) {
  let s = 0,
    f = 0;

  while (f < nums.length) {
    if (nums[f] !== 0) {
      nums[s] = nums[f];
      s++;
    }
    f++;
  }

  while (s < nums.length) {
    nums[s] = 0;
    s++;
  }
  console.log(nums);
};
let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
