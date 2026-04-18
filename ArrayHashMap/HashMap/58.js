var lengthOfLastWord = function (s) {
  let max = 0;
  let started = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
    
      started = true;
        max++;
    } else if (started) {
      break;
    }
  }

  return max;
};
//leetcode.com/problems/length-of-last-word/description/
https: console.log(lengthOfLastWord("   fly me   to   the moon  "));
