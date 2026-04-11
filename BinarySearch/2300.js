var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);

  const result = [];

  for (let spell of spells) {
    let left = 0,
    right = potions.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (spell * potions[mid] >= success) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    result.push(potions.length - left);
  }

  return result;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));

