const findPivot = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    while (left < right && nums[left] === nums[left + 1]) {
      left++;
    }
    while (left < right && nums[right] === nums[right - 1]) {
      right--;
    }
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  }

  console.log("Pivot at index:", left);
  return left;
};

const bn = (nums, left, right, target) => {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

var search = function (nums, target) {
  const n = nums.length;
  const pivot = findPivot(nums);

  // Search right half first
  const rightSearch = bn(nums, pivot, n - 1, target);
  console.log("Search in right half:", rightSearch);

  if (rightSearch) return true;

  // Then left half
  const leftSearch = bn(nums, 0, pivot - 1, target);
  console.log("Search in left half:", leftSearch);

  return leftSearch;
};

console.log(
  search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)
);
