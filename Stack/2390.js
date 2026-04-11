var removeStars = function (s) {
  let ans = [];
  for (let item of s) {
    if (item === "*") {
      ans.pop();
    } else {
      ans.push(item);
    }
  }
  return ans.join("");
};

console.log(removeStars("leet**cod*e"));
