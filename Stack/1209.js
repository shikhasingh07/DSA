var removeDuplicates = function (s, k) {
  let stack = [];

  for (let i of s) {
    if (stack.length && stack[stack.length - 1][0] === i) {
      stack[stack.length - 1][1]++;
    } else {
      stack.push([i, 1]);
    }

    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
  }
  let result = "";
  for (let [char, count] of stack) {
    result += char.repeat(count);
  }
  return result;
};

console.log(removeDuplicates("deeedbbcccbdaa", 3));
