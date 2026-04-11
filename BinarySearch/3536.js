const maxProduct = function (n) {
  const digits = n.toString().split("").map(Number);
  let max = 0;

  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      max = Math.max(max, digits[i] * digits[j]);
    }
  }

  return max;
};

console.log(maxProduct(267));
