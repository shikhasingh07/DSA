var minWindow = function (s, t) {
  let map = new Map();

  for (let c of t) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  let need = map.size;
  let left = 0;
  let res = "";
  let minLen = Infinity;

  for (let right = 0; right < s.length; right++) {
    let c = s[right];

    // {a : 1 , b : 1 , c : 1}
    if (map.has(c)) {
      map.set(c, map.get(c || 0) - 1);
      //   {a : 0 , b : 0 , c : 0}
      if (map.get(c) === 0) need--;
    }

    while (need === 0) {
      // shrink
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        res = s.slice(left, right + 1);
      }

      let d = s[left];
      if (map.has(d)) {
        map.set(d, map.get(d) + 1);
        if (map.get(d) > 0) need++;
      }
      left++;
    }
  }
  return res;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
