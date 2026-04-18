var missingNumber = function (nums) {
  let n = nums.length;
  let set = new Set();
  for (let i of nums) {
    set.add(i);
  }

  console.log(set)
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return -1;
};
let nums = [ 0, 1];
console.log(missingNumber(nums));
