var isIsomorphic = function (s, t) {
  let mapST = new Map(); // use Map if you want get/set
  let mapTS = new Map(); // use Map if you want get/set

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (mapST.has(charS)) {
      if (mapST.get(charS) !== charT) return false;
    } else {
      mapST.set(charS, charT);
    }

    if (mapTS.has(charT)) {
      if (mapTS.get(charT) !== charS) return false;
    } else {
      mapTS.set(charT, charS);
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
