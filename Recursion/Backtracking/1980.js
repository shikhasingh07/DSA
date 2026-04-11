function bracktracking(nums, n, idx, current, numsSet) {
  if (idx === n) {
    return numsSet.has(current) ? null : current;
  }

  console.log({ current, idx });
  let res = bracktracking(nums, n, idx + 1, current + "0", numsSet);
  console.log({ res });
  if (res) return res;

  console.log({ current, res });
  res = bracktracking(nums, n, idx + 1, current + "1", numsSet);
  if (res) return res;

  return null;
}

var findDifferentBinaryString = function (nums) {
  let numsSet = new Set(nums);
  return bracktracking(nums, nums.length, 0, "", numsSet);
};

console.log(findDifferentBinaryString(["001","011","000"]));
