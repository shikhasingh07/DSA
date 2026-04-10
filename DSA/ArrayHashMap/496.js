var nextGreaterElement = function (nums1, nums2) {
  let ans = {};
  let stack = [];
  for (let i of nums2) {
    while (stack.length > 0 && i > stack[stack.length - 1]) {
      let small = stack.pop();
      ans[small] = i;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    ans[stack.pop()] = -1;
  }

  let anss = [];

  for (let num of nums1) {
    anss.push(ans[num]);
  }
  return anss;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
 