var stringMatching = function (words) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i])) {
        arr.push(words[i]);
        break;
      }
    }
  }
  return arr;
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
