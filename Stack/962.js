var maxWidthRamp = function (nums) {
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }

    let maxwidth = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            maxwidth = Math.max(maxwidth, i - stack[stack.length - 1])
            stack.pop();
        }

    }

    return maxwidth;
};