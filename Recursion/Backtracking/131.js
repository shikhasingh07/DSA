function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

function backtrack(s, idx, current, ans) {
  if (idx === s.length) {
    ans.push([...current]);
    return;
  }

  for (let i = idx; i < s.length; i++) {
    const seg = s.substring(idx, i + 1);   // substring from idx..i
    if (isPalindrome(seg)) {
      current.push(seg);
      backtrack(s, i + 1, current, ans);
      current.pop();
    }
  }
}

var partition = function (s) {
  var ans = [];
  backtrack(s, 0, [], ans);
  return ans;
};

console.log(partition("aab"));
