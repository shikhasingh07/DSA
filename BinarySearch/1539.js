var findKthPositive = function (nums, k) {
  //   let start = 0;
  //   let end = nums.length - 1;

  //   while (start < end) {
  //     let mid = Math.floor((start + end) / 2);

  //     if(nums[mid] < k){
  //         start = mid + 1
  //     }else if (nums[mid] > k){
  //         end = mid ;
  //     }
  //   }
  //   return start;

  let start = 0;
  let end = nums.length - 1;
  
  while (start <= end){
    let mid = Math.floor((start + end) / 2);

    if(nums[mid] - mid - 1 < k){
        start = mid + 1; 
    }else {
        end =  mid - 1;
    }
  }
  return start + k;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 8));
