var findErrorNums = function (nums) {
  let map = {};
  let ans = [];
  for (let i of nums) {
    map[i] = (map[i] || 0) + 1;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (map[i] === 2) {
      ans[0] = i;
    }
    if (!map[i]) {
      ans[1] = i;
    }
  }

  console.log(ans);
  return ans;
};
let nums = [1, 2, 2, 4];
console.log(findErrorNums(nums));
