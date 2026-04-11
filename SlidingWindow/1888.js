var minFlips = function (s) {
  let oth = 0;
  let fth = 0;
  let n = s.length;
  let newS = s + s;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    if (newS[i] !== (i % 2 === 0 ? "0" : "1")) oth++;
    if (newS[i] !== (i % 2 === 0 ? "1" : "0")) fth++;
  }
  min = Math.min(oth, fth);

  for (let i = n; i < 2 * n; i++) {
    // 5 - 5 = 0
    if (newS[i - n] !== ((i - n) % 2 === 0 ? "0" : "1")) oth--;
    if (newS[i - n] !== ((i - n) % 2 === 0 ? "1" : "0")) fth--;

    if (newS[i] !== (i % 2 === 0 ? "0" : "1")) oth++;
    if (newS[i] !== (i % 2 === 0 ? "1" : "0")) fth++;

    min = Math.min(min, oth, fth);
  }
  return min;
};

const minopreation = (s) => {
  let n = s.length;
  let startWith0 = 0;
  let startWith1 = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0 && s[i] === "1") startWith0++;
    if (i % 2 === 1 && s[i] === "0") startWith0++;

    // expected char if string starts with '1'
    if (i % 2 === 0 && s[i] === "0") startWith1++;
    if (i % 2 === 1 && s[i] === "1") startWith1++;
  }

  return Math.min(startWith0, startWith1);
};
console.log(minopreation("01001001101"));
