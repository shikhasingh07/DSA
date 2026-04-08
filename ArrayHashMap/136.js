var singleNumber = function (nums) {
  let map = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  let ans = [];
  for (let key in map) {
    console.log(key);
    if (map[key] === 1) {
      ans.push(Number(key));
    }
  }

  return ans;
};
let nums = [-1, 0];
console.log(singleNumber(nums));
