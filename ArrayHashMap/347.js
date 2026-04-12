var topKFrequent = function (nums, k) {
  let map = {};

  for (let i of nums) {
    map[i] = (map[i] || 0) + 1;
  }

  let ans = Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k);
  let number = ans.map((id) => Number(id));
  return number;
};
let nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2];
let k = 2;
console.log(topKFrequent(nums, k));
