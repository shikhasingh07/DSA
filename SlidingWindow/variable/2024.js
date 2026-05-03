function maxLen(answerKey, k, flipChar) {
  let left = 0,
    count = 0,
    max = 0;
  for (let right = 0; right < answerKey.length; right++) {
    // if current char is flipChar, count it
    if (answerKey[right] === flipChar) count++;

    // shrink when?
    while (count > k) {
      if (answerKey[left] === flipChar) count--;
      left++;
    }

    // track max
    max = Math.max(max, right - left + 1);
  }
  return max;
}

var maxConsecutiveAnswers = function (answerKey, k) {
  return Math.max(
    maxLen(answerKey, k, "F"), // maximize T's → flip F's
    maxLen(answerKey, k, "T"), // maximize F's → flip T's
  );
};
let answerKey = "TTFF",
  k = 2;
console.log(maxConsecutiveAnswers(answerKey, k));
((answerKey = "TFFT"), (k = 1));
console.log(maxConsecutiveAnswers(answerKey, k));
