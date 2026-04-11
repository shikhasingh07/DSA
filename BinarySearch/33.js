const findPivot = (nums) => {
    let left = 0;
    right = nums.length - 1;
  
    while (left < right) {
      // how to find smallest element
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] < nums[right]) {
        right = mid ;
      }else{
         left = mid + 1;
      }
    }
    return left;
}

const bnS = (nums , end , start , target) => {
    let left = start;
    let right = end;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid-1;
        }
    }
    return -1;
}

const search = (arr, key) => {
  //finding pivot index
  let n = arr.length;

  let pivotnums = findPivot(arr);
  //left
  let idx = bnS(arr, pivotnums - 1, 0, key);

  if (idx !== -1) {
    return idx;
  }

  return bnS(arr , n - 1 , pivotnums , key)
};

console.log(Search([4, 5, 6, 7, 0, 1, 2], 3));
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/