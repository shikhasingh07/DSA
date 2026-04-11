function combination(digit, idx, curr, map, ans) {
  if (digit.length === 0) {
    return [];
  }

  if (digit.length === idx) {
    ans.push(curr.join(""));
    return ans;
  }

  for (let ch of map[digit[idx]]) {
    curr.push(ch);
    combination(digit, idx + 1, curr, map, ans);
    curr.pop();
  }
}

var letterCombinations = function (digits) {
  var ans = [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  combination(digits, 0, [], map, ans);
  return ans;
};

console.log(letterCombinations("23"));
