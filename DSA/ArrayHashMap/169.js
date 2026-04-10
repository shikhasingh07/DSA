var majorityElement = function(nums) {
    
    let count = 0; 
    let candid = null; 

    for(let n of nums){
        if(count === 0){
            candid = n;
        }

        count += (n === candid) ? 1 : -1;
    }

    return candid;
};

console.log(majorityElement([2,2,1,1,1,2,2]))\