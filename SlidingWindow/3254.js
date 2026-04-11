var resultsArray = function (nums, k) {
  let n = nums.length;
  let left = 0;
  let ans = [];
  let max = 1;

  for (let i = 0; i < k; i++) {
    if (i > 0 && nums[i] === nums[i - 1] + 1) {
      max++;
    } else {
      max = 1;
    }
  }

  if (max === k) {
    ans[0] = nums[k - 1];
  } else {
    ans[0] = -1;
  }

  for (let right = k; right < n; right++) {
    if (nums[right] === nums[right - 1] + 1) {
      max++;
    } else {
      max = 1;
    }

    if (max >= k) {
      ans.push(nums[right]);
    } else {
      ans.push(-1);
    }
  }

  return ans;
};

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3));
