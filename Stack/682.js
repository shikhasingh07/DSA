var calPoints = function (operations) {
  let stack = [];

  for (let item of operations) {
    if (item === "C") {
      stack.pop();
    } else if (item === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (item === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(parseInt(item));
    }
  }
  return stack.reduce((sum, num) => sum + num, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
