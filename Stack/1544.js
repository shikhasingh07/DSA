var makeGood = function (s) {
  let stack = [];
  for (let item of s) {
    if (
      stack.length > 0 &&
      Math.abs(stack[stack.length - 1].charCodeAt(0) - item.charCodeAt(0)) ===
        32
    ) {
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  return stack;
};

console.log(makeGood("leEeetcode"));
