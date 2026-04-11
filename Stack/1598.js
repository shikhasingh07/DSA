var minOperations = function (logs) {
  let count = 0;
  for (let log of logs) {
    if (log === "../") {
      count = Math.max(0, count - 1);
    } else if (log !== "./") {
      count++;
    }
  }
  return count;
};

// Using Stack 
//var minOperations = function (logs) {
//   const stack = [];
  
//   for (let log of logs) {
//     if (log === "../") {
//       if (stack.length > 0) {
//         stack.pop(); // Go back to the previous directory
//       }
//     } else if (log !== "./") {
//       stack.push(log); // Enter a new directory
//     }
//   }
  
//   return stack.length;
// };

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
