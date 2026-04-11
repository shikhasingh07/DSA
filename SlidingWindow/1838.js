var maxFrequency = function (nums, k) {
  let left = 0;
  let curr = 0;
  let target = 0;
  let ans = 0;
  for (let right = 0; right < nums.length; right++) {
    target = nums[right];
    curr = target;

    if ((right - left + 1) * target - curr > k) {
      curr -= nums[left];
      left++;
    }

    ans = Math.max(right - left + 1, ans);
  }

  return ans;
};

console.log(maxFrequency([1, 4, 8, 13], 5));
