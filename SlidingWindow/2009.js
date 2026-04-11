var minOperations = function (nums) {
  const uniq = Array.from(new Set(nums));
  console.log(uniq);

  uniq.sort((a, b) => a - b);
  console.log(uniq);

  let n = nums.length; 
  let left = 0;
  let max = 0; 


  for(let right = 0 ; right < uniq.length ; right++){
    if(uniq[right] - uniq[left] > n - 1){
        left ++ ; 
    }

    max = Math.max(max, right - left + 1);
  }

  return n - max;
};

console.log(minOperations([8, 5, 9, 9, 8, 4]));
