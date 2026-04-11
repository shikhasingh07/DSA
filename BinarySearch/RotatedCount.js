const rotatedArray = (nums) => {
  let left = 0;
  right = nums.length - 1;

  while (left < right) {
    // how to find smallest element
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[right]) {
      right = mid ;
    }else{
       left = mid + 1;
    }
  }
  return nums[left];
};

console.log(rotatedArray([5, 1, 2, 3, 4]));
