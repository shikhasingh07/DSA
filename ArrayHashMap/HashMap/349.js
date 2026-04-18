var intersection = function (nums1, nums2) {
  let map = new Map();
  let ans = [];
  for (let i of nums1) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  for (let num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      ans.push(num);
      map.set(num, (map.get(num) || 0) - 1);
    }
  }
  return ans;
};
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(intersection(nums1, nums2));
