var maximumSubarraySum = function (nums, k) {
  let map = new Map();
  let left = 0;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < k ; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    sum += nums[i];
  }

  if (map.size === k) {
    max = sum;
  }

  for (let right = k; right < nums.length; right++) {
    sum -= nums[left];

    map.set(nums[left], map.get(nums[left]) - 1);
    if(map.get(nums[left]) === 0){
        map.delete(nums[left]);
    }
    left++;

    sum += nums[right];
     map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    if (map.size === k) {
      max = Math.max(max, sum);
    }
  }
  return max;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
