var searchMatrix = function (matrix, target) {
  // //linear approach
  // for(let i = 0 ; i < matrix.length ; i++){
  //     for(let j = 0 ; j < matrix[0].length ; j++){
  //         if(matrix[i][j] === target){
  //             return true;
  //         }
  //     }
  // }
  // return false;

  //binary search
  let n = matrix.length;
  let m = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  let mid, midEle;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    midEle = matrix[Math.floor(mid / m)][mid % m];

    if (target === midEle) {
      return true;
    } else if (target < midEle) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    6
  )
);
