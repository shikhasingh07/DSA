var pivotArray = function (nums, pivot) {
    // let less = [],
    //   equal = [],
    //   greater = [];
    // for (let num of nums) {
    //   if (num < pivot) {
    //     less.push(num);
    //   } else if (num === pivot) {
    //     equal.push(num);
    //   } else if (num > pivot) {
    //     greater.push(num);
    //   }
    // }
    // return [...less, ...equal, ...greater];

  let less = 0,
    eq = 0,
    more = 0;
  for (let num of nums) {
    if (num < pivot) {
      less++;
    } else if (num === pivot) {
      eq++;
    } else {
      more++;
    }
  }

  let lessStart = 0,
    equalStart = less,
    greaterStart = less + eq;
  let result = [];
  for (let num of nums) {
    if (num < pivot) {
      result[lessStart++] = num;
    } else if (num === pivot) {
      result[equalStart++] = num;
    } else {
      result[greaterStart++] = num;
    }
  }
  return result;
};
let nums = [9, 12, 5, 10, 14, 3, 10],
  pivot = 10;
console.log(pivotArray(nums, pivot));
