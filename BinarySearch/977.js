var sortedSquares = function(nums) {
    let left = 0 ; 
    let right = nums.length - 1; 

    let idx = nums.length - 1; 
    let res = []
    while(left <= right){

        let valLeft = nums[left] * nums[left]; 
        let valRight = nums[right] * nums[right]; 
        
        if(valLeft > valRight){
            res[idx] = valLeft; 
            left ++; 
        }else {
            res[idx] = valRight;
            right --; 
        }
        idx --;
    }
    return res;
};

console.log(sortedSquares([-4 , -1 , 0 , 3 , 10]))