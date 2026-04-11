var find132pattern = function(nums) {
    let ptr = Math.min;
    let stack = [];
    for(let i = nums.length - 1 ; i >= 0 ; i--){
       
        if(ptr > nums[i]){
          return true; 
        }

        while(stack.length && stack[stack.length - 1] < nums[i]){
            ptr = stack.pop();
        }

        stack.push(nums[i]);
    }
    return false;
};

console.log(find132pattern([3,1,2,2]))