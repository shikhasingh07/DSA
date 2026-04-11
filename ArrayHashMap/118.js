var generate = function (numRows) {
  let ans = [];
  for (let i = 0; i < numRows; i++) {
    let arr = new Array(i + 1).fill(1);;
    for (let j = 1; j < i; j++) {
        // to move up
        arr[j] = ans[i-1][j-1] + ans[i - 1][j];
    }

    ans.push(arr);
  }

    return ans;
};

console.log(generate(5));
