var numberOfSubarrays = function (nums, k) {
  const map = new Map();
  map.set(0, 1);

  let count = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) count++;

    if (map.has(count - k)) {
      maxLen += map.get(count - k);
    }

    map.set(count, (map.get(count) || 0) + 1);
  }
  return maxLen;
};

console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2));
