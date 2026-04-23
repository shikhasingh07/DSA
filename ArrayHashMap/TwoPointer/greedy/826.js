var maxProfitAssignment = function (difficulty, profit, worker) {
  let jobs = difficulty.map((d, i) => [d, profit[i]]);
  jobs.sort((a, b) => a[0] - b[0]);
  worker.sort((a, b) => a - b);
  let j = 0,
    maxPro = 0,
    total = 0;
  for (let able of worker) {
    while (j < jobs.length && jobs[j][0] <= able) {
      maxPro = Math.max(maxPro, jobs[j][1]);
      j++;
    }
    total += maxPro;
  }

  return total;
};
let difficulty = [2, 4, 6, 8, 10],
  profit = [10, 20, 30, 40, 50],
  worker = [4, 5, 6, 7];
console.log(maxProfitAssignment(difficulty, profit, worker));
