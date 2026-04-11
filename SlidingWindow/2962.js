var countSubarrays = function (nums, k) {
  let left = 0;
  let count = 0;
  let max = Math.max(...nums);
  let res = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === max) {
      count++;
    }

    while (count >= k) {
      res += (nums.length - right);
      if (nums[left] === max) {
        count--;
      }
      left++;
    }
  }
  return res;
};

console.log(countSubarrays([1, 3, 2, 3, 3], 2));
