var minOperations = function(nums, x) {
    
    let target = nums.reduce((sum,curr) => sum + curr ,0) - x; 
    let left = 0; 
    let maxlen = -1;
    let curr = 0 ;

    if(target < 0 ) return -1;
    for(let right = 0 ; right < nums.length; right ++){
        curr += nums[right]; 

        while (curr > target ){
            curr -= nums[left]; 
            left++; 
        }

        if(curr === target){
            maxlen = Math.max(right-left +1 , maxlen); 
        }
    }

    return maxlen === -1 ? -1 : nums.length - maxlen;
};

console.log(minOperations([1,1,4,2,3],5))