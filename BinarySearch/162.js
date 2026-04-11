const findPeak = (nums) => {
     
    if(nums.length ===0) return -1;

    let left = 0 ;
    let right = nums.length - 1;

    while(left < right){

        let mid = Math.floor((left + right) /2);

        if(nums[mid] > nums[mid+1]){
            right = mid; 
        }
        else{
            left = mid + 1;
        }
    }
   return left;
}

console.log(findPeak([1,2,3,1]))
