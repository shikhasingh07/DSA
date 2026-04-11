var numSubarraysWithSum = function(nums, goal) {
    let left = 0 ;
    let curr = 0 ;
    let map = new Map();
    map.set(0,1);
    let count = 0;
    for(let right = 0 ; right < nums.length ; right++){
        curr += nums[right];

        if(map.has(curr-goal)){
            count += map.get(curr-goal);
        }
        
        map.set(curr , (map.get(curr) || 0) +1); 
    }
    return count;
};


console.log(numSubarraysWithSum([1,3,6],4))