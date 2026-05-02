var numSubarrayProductLessThanK = function (nums, k) {
  let product = 1,
    result = 0,
    left = 0;
  if (k <= 1) return 0;  
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    result += right - left + 1;
  }
  return result;
  // prouct *= num
  // if(product >= k) left ++ & delet
  // result -> count
  // return result
};
let nums = [1,2,3],
  k = 0;
console.log(numSubarrayProductLessThanK(nums, k));
