var next = (arr) => {
  let result = new Array(arr.length).fill(-1);
  let stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (arr[i] >= stack[stack.length - 1] && stack.length) {
      stack.pop();
    } 
    if(stack.length){
        result[i] = stack[stack.length-1];
    }
    stack.push(arr[i]);
  }
  return result;
};

console.log(next([6, 0, 8, 1, 3]));
