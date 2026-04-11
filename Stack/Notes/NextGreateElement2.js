var next2 = (arr) => {
  //step1 -> creating a stack
  let stack = [];

  //ans list
  let ans = new Array(arr.length).fill(-1);

  let len = arr.length;
  for (let i = 2 * len - 1; i >= 0; i--) {
    let idx = i % len;

    while (stack.length && stack[stack.length - 1] <= arr[idx]) {
      stack.pop();
    }

    if (i < len) {
      if (stack.length) {
        ans[i] = stack[stack.length - 1];
      }
    }
    stack.push(arr[idx]);
  }

  return ans;
};

console.log(next2([2, 10, 12, 1, 11]));
