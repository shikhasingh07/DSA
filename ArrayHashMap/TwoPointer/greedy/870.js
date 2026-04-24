var advantageCount = function (nums1, nums2) {
  let idx = nums2.map((val, i) => [val, i]).sort((a, b) => a[0] - b[0]);
  let lo = 0,
    hi = nums1.length - 1;
  nums1.sort((a, b) => a - b);
  let result = [];
  for (let i = idx.length - 1; i >= 0; i--) {
    let [val, oIdx] = idx[i];

    if (nums1[hi] > val ) {
      result[oIdx] = nums1[hi];
      hi--;
    }else {
        result[oIdx] = nums1[lo]; 
        lo++;
    }
  }
  return result;
};
let nums1 = [2, 7, 11, 15],
  nums2 = [1, 10, 4, 11];
console.log(advantageCount(nums1, nums2));
