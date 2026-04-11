var evalRPN = function (tokens) {
  let ans = [];
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (let item of tokens) {
    if (operations[item]){
      let b = ans.pop();
      let a = ans.pop();
      let cal = (operations[item](a,b));
      ans.push(Number(cal));
    } else {
      ans.push(Number(item));
    }
  }
  return ans.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
