var isHappy = function (n) {
  if (n <= 0) {
    return false;
  }

  let set = new Set();
  while (n !== 1) {
    if (set.has(n)) return false;
    set.add(n);
    let sum = 0;
    while (n > 0) {
      let nums = n % 10;
      sum += nums * nums;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return true;
};

console.log(isHappy(2));
