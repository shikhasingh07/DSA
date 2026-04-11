var minSubArrayLen = function(target, nums) {
    let left = 0;
    let curr = 0; 
    let res = Infinity; 

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];

        while (curr >= target) {
            res = Math.min(res, right - left + 1);
            curr -= nums[left];
            left++;
        }
    }

    return res === Infinity ? 0 : res;
};