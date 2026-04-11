var reverseParentheses = function (s) {
  let stack = [];
  let ans = s.split("");
  for (let i = 0; i < ans.length; i++) {
    if(ans[i] === "(") {
      stack.push(i);
    } else if(ans[i] === ")"){
      let start = stack.pop();
      let revese = ans.slice(start + 1, i).reverse();
      ans.splice(start, i - start + 1, ...revese);
      i = start + 1;
    }
  }
  return ans.join("");
};

console.log(reverseParentheses("(u(love)i)"));
