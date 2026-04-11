var longestConsecutive = function (nums) {
  let set = new Set();

  for (let i of nums) {
    set.add(i);
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let length = 1;
      while (set.has(nums[i] + length)) {
        length++;
      }
      if (max < length) {
        max = length;
      }
    }
  }
  return max;
};
let nums = [1, 2, 3, 4, 100, 200];
console.log(longestConsecutive(nums));
