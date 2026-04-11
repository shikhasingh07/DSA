function backtracking(nums, idx){
  if (idx === 0) {
    return {
      maxProd: nums[0],
      minProd: nums[0],
      best: nums[0],
    };
  }

  // Get the result for the previous index
  const prev = backtracking(nums, idx - 1);
  const x = nums[idx];

  // Compute possible products
  const maxHere = Math.max(x, x * prev.maxProd, x * prev.minProd);
  const minHere = Math.min(x, x * prev.maxProd, x * prev.minProd);

  // Update best so far
  const best = Math.max(prev.best, maxHere);

  return { maxProd: maxHere, minProd: minHere, best };

}
var maxProduct = function(nums) {
   const result = backtracking(nums, nums.length - 1);
  return result.best;
};

console.log(maxProduct([2,3,-2,4]))