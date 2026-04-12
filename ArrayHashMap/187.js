var findRepeatedDnaSequences = function (s) {
  let set = new Set();
  let result = new Set();

  for (let i = 0; i <= s.length - 10; i++) {
    let sub = s.substring(i, i + 10);
    if (set.has(sub)) {
      result.add(sub);
    } else {
      set.add(sub);
    }
  }

  return [...result];
};
let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(findRepeatedDnaSequences(s));
