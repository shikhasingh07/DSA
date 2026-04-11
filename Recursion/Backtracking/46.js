function permuted(nums, current, ans) {
  if (current.length === nums.length) {
    ans.push([...current]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (current.includes(nums[i])) continue;

    current.push(nums[i]);
    permuted(nums, current, ans);
    current.pop();
  }
}

var permute = function (nums) {
  var ans = [];
  permuted(nums, [], ans);
  return ans;
};

console.log(permute([1, 2, 3]));
