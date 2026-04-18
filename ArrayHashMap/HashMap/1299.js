var replaceElements = function (arr) {
  let greate = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = greate;
    if (curr > greate) {
      greate = curr;
    }
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
