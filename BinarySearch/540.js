var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    let isEven;
    if ((right - mid) % 2 === 0) {
      isEven = true;
    } else {
      isEven = false;
    }

    if (nums[mid] === nums[mid + 1]) {
      if (isEven) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] === nums[mid - 1]) {
      if (isEven) {
        right = mid - 2;
      } else {
        left = mid + 1;
      }
    } else {
      return nums[mid]; 
    }
  }
  return nums[left];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
