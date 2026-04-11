var smallestRange = function (lists) {
  const k = lists.length;
  const merged = [];

  // Flatten
  for (let i = 0; i < k; i++) {
    for (let v of lists[i]) merged.push([v, i]);
  }

  // Sort by value
  merged.sort((a, b) => a[0] - b[0]);

  const count = new Array(k).fill(0);
  let have = 0; // distinct lists covered
  let left = 0;
  let bestLow = -Infinity, bestHigh = Infinity;
  let bestSize = Infinity;

  for (let right = 0; right < merged.length; right++) {
    const [valR, idR] = merged[right];
    if (count[idR] === 0) have++;
    count[idR]++;

    // shrink while valid (covering all k lists)
    while (have === k) {
      const [valL, idL] = merged[left];

      if (valR - valL < bestSize) {
        bestSize = valR - valL;
        bestLow = valL;
        bestHigh = valR;
      }

      count[idL]--;
      if (count[idL] === 0) have--;
      left++;
    }
  }

  return [bestLow, bestHigh];
};

console.log(
  smallestRange([
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ])
);
