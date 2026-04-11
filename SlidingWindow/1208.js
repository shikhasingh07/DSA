var equalSubstring = function (s, t, maxCost) {
  let left = 0;
  let maxlen = 0;
  let curr = 0;

  for (let right = 0; right < s.length; right++) {
    curr += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

    console.log(
      "Curr --->",
      curr,
      s.charCodeAt(right),
      t.charCodeAt(right),
      maxlen
    );
    while (curr > maxCost) {
      console.log(curr, Math.abs(s.charCodeAt(right) - t.charCodeAt(left)));
      curr -= Math.abs(s.charCodeAt(right) - t.charCodeAt(left));
      console.log("LEFT ---> ", left);
      left++;
    }

    console.log("maxLen --->", maxlen);
    console.log("right --->", right);
    maxlen = Math.max(right - left + 1, maxlen);
  }

  return maxlen;
};

console.log(equalSubstring("abcd", "bcdf", 3));
