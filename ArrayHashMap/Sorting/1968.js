var rearrangeArray = function(nums) {
    let n = nums.length; 
    nums.sort((a,b) => a-b)

    let result = new Array(n); 
    let i = 0; 
    let j = 0; 

    for(; i< n && j < n; i++ , j +=2){
        result[j] = nums[i]; 
    }

    j = 1 ;
    for(; i < n && j < n ; i ++ , j += 2){
        result[j] = nums[i]; 
    }
    return result; 
};