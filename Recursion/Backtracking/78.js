function subset(nums, start, current, ans) {
  if (start === nums.length) {
    ans.push([...current]);
    return;
  }

  subset(nums, start + 1, current, ans);
  current.push(nums[start]);

  subset(nums, start + 1, current, ans);
  current.pop();
}

var subsets = function (nums) {
  let ans = [];
  subset(nums, 0, [], ans);

  let unique = new Set(ans.map(JSON.stringify));
  return [...unique].map(JSON.parse);
};

console.log(subsets([1, 2, 3]));
