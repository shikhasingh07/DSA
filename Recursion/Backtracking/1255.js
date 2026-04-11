function backtracking(arr, wordFreqs, wordScores, idx, n) {
  if (idx === n) {
    return 0;
  }

  let best = backtracking(arr, wordFreqs, wordScores, idx + 1, n);
  const f = wordFreqs[idx];
  let ok = true;
  for (let c = 0; c < 26; c++) {
    if (f[c] > arr[c]) {
      // not enough letters
      ok = false;
      break;
    }
  }

  if (ok) {
    // consume letters
    for (let c = 0; c < 26; c++) arr[c] -= f[c];

    // take score + recurse
    best = Math.max(
      best,
      wordScores[idx] + backtracking(arr, wordFreqs, wordScores, idx + 1, n)
    );

    // restore letters (backtrack)
    for (let c = 0; c < 26; c++) arr[c] += f[c];
  }

  return best ;
}
var maxScoreWords = function (words, letters, score) {
  const idx = (ch) => ch.charCodeAt(0) - 97;
  var arr = new Array(26).fill(0);
  for (let ch of letters) {
    arr[idx(ch)]++;
  }

  const wordFreqs = [];
  const wordScores = [];
  for (const w of words) {
    const f = Array(26).fill(0);
    for (const ch of w) f[idx(ch)]++;
    wordFreqs.push(f);

    let s = 0;
    for (let i = 0; i < 26; i++) s += f[i] * score[i];
    wordScores.push(s);
  }

  return backtracking(arr, wordFreqs, wordScores, 0, words.length);
};

console.log(
  maxScoreWords(
    ["dog", "cat", "dad", "good"],
    ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
    [
      1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
