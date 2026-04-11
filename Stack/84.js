const nse = (arr) =>{
    let ans = new Array(arr.length).fill(arr.length);
    let stack = []; 

    for(let i = 0 ; i < arr.length ; i ++){
        while (stack.length && arr[stack[stack.length-1]] > arr[i]){
          ans[stack.pop()] = i
        }
        stack.push(i)
    }
    return ans;
}

const pse = (arr) => {
    let ans = new Array(arr.length).fill(-1); 
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        ans[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    return ans;
}

var largestRectangleArea = function (heights) {
  let ans =0;

  //finding nextsmallerElement
  const fNEArr = nse(heights);

  // fiding previosSmallerElement
  const pSEArr = pse(heights);

  for (let i = 0; i < heights.length; i++) {
    let width = fNEArr[i] - pSEArr[i] - 1;
    let area = heights[i] * width; 
    ans = Math.max(ans , area); 
  }
  return ans;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
