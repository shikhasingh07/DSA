var decodeString = function (s) {
  let cs = [];
  let ss = [];
  let css = "";
  let cn = 0;

  for (let char of s) {
    if (!isNaN(char)) {
      cn = cn * 10 + parseInt(char);
    } else if (char === "[") {
      cs.push(cn);
      ss.push(css);
      cn = 0;
      css = "";
    } else if (char === "]") {
        let rt = cs.pop(); 
        let ps = ss.pop();
        css = ps + css.repeat(rt);
    } else {
      css += char;
    }
  }
  return css;
};

console.log(decodeString("3[a]2[bc]"));
