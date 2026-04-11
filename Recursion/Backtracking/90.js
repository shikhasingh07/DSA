function subset(nums, start, current, ans) {
  ans.push([...current]);

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;

    current.push(nums[i]);
    subset(nums, i + 1, current, ans);
    current.pop();
  }
}

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  var ans = [];
  subset(nums, 0, [], ans);
  return ans;
};

console.log(subsetsWithDup([1, 2, 2]));
