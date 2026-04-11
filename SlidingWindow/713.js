var numSubarrayProductLessThanK = function(nums, k) {
   let left = 0;
    let curr = 1;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {

        curr *= nums[right];

        while (curr >= k && left <= right) {
            curr /= nums[left];
            left++;
        }

        maxLen += (right - left + 1);
    }

    return maxLen;
};
console.log(numSubarrayProductLessThanK([10,5,2,6],100))