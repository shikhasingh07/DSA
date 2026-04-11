// [false , false , false]
function permute(nums, ans, current, used) {
  if (current.length === nums.length) {
    ans.push([...current]);
    return ans;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
    if (used[i]) continue;

    used[i] = true;

    current.push(nums[i]);

    permute(nums, ans, current ,used);
    current.pop();
    used[i] = false;
  }
}

var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];
  permute(nums, ans, [], new Array(nums.length).fill(false));
  return ans;
};

console.log(permuteUnique([1, 1, 2]));
