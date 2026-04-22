const OneEditDistance = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let i = 0,
    j = 0;

  let edit = false;
  while (i < str1.length || j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      if (str1.length > str2.length) {
        i++;
      } else if (str2.length > str1.length) {
        j++;
      } else {
        i++;
        j++;
      }

      if (edit) return false;
      edit = true;
    }
  }
  return edit;
};

let str1 = "ab",
  str2 = "abc";
console.log(OneEditDistance(str1, str2));
