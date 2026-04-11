function vaild(str) {
  let stack = [];

  for (let item of str) {
    if (item === "{" || item === "[" || item === "(") {
      stack.push(item);
    } else if (
      (item === "}" && stack.pop() !== "{") ||
      (item === "]" && stack.pop() !== "[") ||
      (item === ")" && stack.pop() !== "(")
    ) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(vaild("[(])"));
