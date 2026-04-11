function solve(n, nums, memo) {
  if (n < 0) return 0;                  // base 1: no house
  if (n === 0) return nums[0];          // base 2: one house
  if (memo[n] !== -1) return memo[n];   // already computed

  // take or skip
  const take = solve(n - 2, nums, memo) + nums[n];
  const skip = solve(n - 1, nums, memo);

  memo[n] = Math.max(take, skip);
  return memo[n];
}

var rob = function (nums) {
  const memo = new Array(nums.length).fill(-1);
  return solve(nums.length - 1, nums, memo);
};

console.log(rob([1,2,3,1]))