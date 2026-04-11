const pse = (arr) => {
  let stack = [];
  let ans = [];

  //if we want to retrun indexs
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    ans[i] = stack.length ? i - stack[stack.length - 1] : i + 1;

    stack.push(i);
  }
  return ans;
};

const nge = (arr) => {
  const ans = [];
  const stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    ans[i] = stack.length ? stack[stack.length - 1] - i : arr.length - i;

    stack.push(i);
  }
  return ans;
};

const sumSubarrayMin = (arr) => {
  const MOD = 1e9 + 7;
  let le = pse(arr);
  let ri = nge(arr);

  let result = 0;
  //for Each elemnts
  console.log({le ,ri})
  //main area to rember
  for (let i = 0; i < arr.length; i++) {
    result = (result + arr[i] * le[i] * ri[i]) % MOD;
  }

  return result;
};
// [0] , [0,3]
console.log(sumSubarrayMin([3, 1, 2, 4]));
