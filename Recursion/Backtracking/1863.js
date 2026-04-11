function subsets(nums, start, xor, ans) {
  if (start === nums.length) {
    ans.push(xor);
    return;
  }

  subsets(nums, start + 1, xor, ans);

  subsets(nums, start + 1, xor ^ nums[start], ans);
}

var subsetXORSum = function (nums) {
  let ans = [];
  subsets(nums, 0, 0, ans);

  let count = 0;

  for (let val of ans) {
    count += val;
  }

  return count;
};
console.log(subsetXORSum([1, 3]));
