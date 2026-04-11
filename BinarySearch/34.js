var findFirst = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let begin = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      begin = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return begin;
};

var findLast = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;

  let last = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (x === arr[mid]) {
      last = mid;
      low = mid + 1;
    } else if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return last;
};

function find(arr, x) {
  let n = arr.length;

  let first = findFirst(arr, x);
  let last = findLast(arr, x);

  let res = [first, last];
  return res;
}

console.log(find([5, 7, 7, 8, 8, 10], 8));
