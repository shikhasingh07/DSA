function isAna(str, st) {
  //   if (st.length !== str.length) return false;
  //   return st.split("").sort().join("") === str.split("").sort().join("");
}

var groupAnagrams = function (strs) {
  //   let ans = [];
  //   let visited = new Array(strs.length).fill(false);
  //   for (let i = 0; i < strs.length; i++) {
  //     if (visited[i]) continue;
  //     let arr = [];
  //     for (let j = 0; j < strs.length; j++) {
  //       if (!visited[j] && isAna(strs[i], strs[j])) {
  //         arr.push(strs[j]);
  //         visited[j] = true;
  //       }
  //     }
  //     ans.push(arr);
  //   }
  //   return ans;

  let map = {};

  for (let s of strs) {
    let key = s.split("").sort().join("");
    console.log({key,s});
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  console.log({ map });
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
