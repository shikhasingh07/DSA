function backtracking(s, set, ans, n, idx, current) {
  if (idx === n) {
    ans.push(current.join(" ")); 
    return ans;
  }

  for (let i = idx; i < n; i++) {
    const word = s.substring(idx, i + 1); 
    if (set.has(word)) {
      current.push(word);
      backtracking(s, set, ans, n, i + 1, current);
      current.pop();
    }
  }
}

var wordBreak = function (s, wordDict) {
  let ans = [];
  let set = new Set(wordDict);
  backtracking(s, set, ans, s.length, 0, []);
  return ans;
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
