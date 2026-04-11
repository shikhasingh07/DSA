// const lowerBound = () => {
//     let low = 0 ;
//     let high = nums.length -1;

//     while (low <= high){
//         let mid = Math.floor((low + high)/2);

//         if(nums[mid] >= n){
//             ans = mid ;
//             high = mid - 1;
//         }else {
//             low = mid + 1;
//         }
//     }
// }

// var searchInsert = function(nums, target) {
//     if(nums.length === 0) return 0;
//     let low = 0;
//     let high = nums.length -1 ;
//     while (low <= high){
//         let mid = Math.floor ((low + high)/2);
//         if(nums[mid] >= target){
//             high = mid - 1;
//         }else {
//             low = mid + 1;
//         }
//     }
//     return low;
// };

// const Findceli = (arr, x) => {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] >= x) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return low < arr.length ? arr[low] : -1; // Return -1 if no ceiling exists
// };

// const FindFloor = (arr, x) => {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] <= x) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return high >= 0 ? arr[high] : -1; // Return -1 if no floor exists
// };

// const floorandceli = (arr, x) => {
//   const celi = Findceli(arr, x);
//   const floor = FindFloor(arr , x);
//   return [celi , floor]
// };
// console.log(floorandceli([3, 4, 4, 7, 8, 10], 8));

// Last occurrence in a sorted array
// const lastIndex = (arr , tar) => {

//     let low = 0 ;
//     let high = arr.length - 1 ;

//     while(low <= high){
//         let mid = Math.floor((low + high) / 2);

//         if(arr[mid] <= tar){
//             low = mid + 1 ;
//         }else {
//             high = mid - 1;
//         }
//     }
//     return high >= 0 ? high : -1;;
// }
// console.log(lastIndex([3, 4, 8, 8, 8, 10], 8));

// [7 , 8 , 9 , 1, 2 ,3 ,4,5] 8
// const searchElementInRotated = (arr, tar) => {
//   let low = 0;
//   let high = arr.length - 1;
//   let ans = -1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === tar) {
//       ans = mid;
//       break;
//     }

//     if (arr[low] <= tar) {
//       // left
//       if (arr[low] <= tar && tar <= arr[mid]) {
//         high = mid + 1;
//       } else {
//         low = mid - 1;
//       }
//     } else {
//       // right
//       if (arr[mid] <= tar && tar <= arr[high]) {
//         low = mid - 1;
//       } else {
//         high = mid + 1;
//       }
//     }
//   }
//   return ans;
// };

// main thing is to - smalling the window
const searchElementInRotatedDuplicate = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === k) {
      return mid;
    }

    // now smalling window
    if (arr[low] <= arr[mid] && arr[mid] <= arr[right]) {
      low++;
      high--;
      continue;
    }

    // same as searchElementInRotated
  }
};

console.log(searchElementInRotated([3, 4, 8, 8, 8, 10], 8));
