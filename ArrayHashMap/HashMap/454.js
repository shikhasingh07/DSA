var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = {};
  let sum = 0;

  let countOfMatchedPairs = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      map[nums1[i] + nums2[j]] = (map[nums1[i] + nums2[j]] || 0) + 1;
    }
  }

  for (let k = 0; k < nums3.length; k++) {
    for (let l = 0; l < nums4.length; l++) {
      if (map[-(nums3[k] + nums4[l])]) {
       countOfMatchedPairs += map[-(nums3[k] + nums4[l])];
      }
    }
  }
  return countOfMatchedPairs;
};
let nums1 = [1, 2],
  nums2 = [-2, -1],
  nums3 = [-1, 2],
  nums4 = [0, 2];
console.log(fourSumCount(nums1,nums2,nums3,nums4));
