function bracktracking(s, idx, n, map, memo) {
  if (n === idx) {
    return true;
  }
  if (memo.has(idx)) return memo.get(idx);
  for (let i = idx + 1; i <= s.length; i++) {
    let word = s.slice(idx, i);
    if (map.has(word)) {
      if (map.has(word) && bracktracking(s, i, n, map, memo)) {
        memo.set(idx, true);
        return true;
      }
    }
  }
  memo.set(idx, false);
  return false;
}
var wordBreak = function (s, wordDict) {
  let map = new Set(wordDict);
  const memo = new Map();
  return bracktracking(s, 0, s.length, map, memo);
};

console.log(wordBreak("leetcode", ["leet", "code"]));
