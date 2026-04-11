var takeCharacters = function (s, k) {
  let n = s.length;
  let total = { a: 0, b: 0, c: 0 };
  for (let ch of s) total[ch]++;

  if (total.a < k || total.b < k || total.c < k) return -1;
  let max = 0;
  let left = 0;

  let map = { a: 0, b: 0, c: 0 };
  for (let right = 0; right < s.length; right++) {
    map[s[right]]++;
    while (map.a > total.a - k || map.b > total.b - k || map.c > total.c - k) {
      map[s[left]]--;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return n - max;
};
