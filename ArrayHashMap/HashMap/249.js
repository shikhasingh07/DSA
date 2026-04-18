var grp = (arr) => {
  let map = {};
  for (let i of arr) {
    if (i.length === 1) {
      map["single"] = map["single"] || [];
      map["single"].push(i);
      continue;
    }

    let key = [];

    for (let j = 1; j < i.length; j++) {
      let diff = (i.charCodeAt(j) - i.charCodeAt(j - 1) + 26) % 26;
      key.push(diff);
    }

    key = key.join("#");
    if (!map[key]) map[key] = [];
    map[key].push(i);
  }
  return Object.values(map);
};

console.log(grp(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));
