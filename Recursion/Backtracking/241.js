function backtrakcing(nums, l, r) {
  let hasOp = false;
  for (let i = l; i <= r; i++) {
    if (nums[i] === "*" || nums[i] === "+" || nums[i] === "-") {
      hasOp = true;
      break;
    }
  }

  if (!hasOp) {
    return [Number(nums.slice(l, r + 1))];
  }

  let res = [];
  for (let i = l; i < r; i++) {
    let ch = nums[i];
    if (ch === "*" || ch === "+" || ch === "-") {
      // spliting the string 
      let left = backtrakcing(nums, l, i - 1);
      let right = backtrakcing(nums, i + 1, r);
      //   combine
      for (let j of left) {
        for (let k of right) {
          if (ch === "*") res.push(j * k);
          else if (ch === "+") res.push(j + k);
          else res.push(j - k);
        }
      }
    }
  }

  return res;
}
var diffWaysToCompute = function (expression) {
  return backtrakcing(expression, 0, expression.length - 1);
};

console.log(diffWaysToCompute("2-1-1"));
