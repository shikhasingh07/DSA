const nextSmallestElement = (arr) => {
  let stack = [];
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] <= stack[stack.length - 1]) {
      stack.pop();
    }

    ans[i] = stack.length ? stack[stack.length - 1] : -1;

    stack.push(arr[i]);
  }
  return ans;
};

console.log(nextSmallestElement([4, 5, 2, 10, 8]));
