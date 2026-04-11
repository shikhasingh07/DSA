var minAddToMakeValid = function (s) {
  if (s.length === 0) return 0;

  let stack = [];
  let left = 0;
  let right = 0 ;
  for (let i of s) {
    if (i === "(") {
      left ++;
    } else {
      if (left > 0) {
        left --; 
      }else {
        right ++;
      }
    }
  }
  return left + right;
};

console.log(minAddToMakeValid("())"));
