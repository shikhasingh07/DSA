function backtracking(day, set, last, costs, memo) {
  if (day > last) {
    return 0;
  }

  if (memo[day] !== undefined) return memo[day];

   if (!set.has(day)) return (memo[day] = backtracking(day + 1, set, last, costs, memo));
  const [c1, c7, c30] = costs;

  let ans = Math.min(
    c1 + backtracking(day + 1, set, last, costs, memo),
    c7 + backtracking(day + 7, set, last, costs, memo),
    c30 + backtracking(day + 30, set, last, costs, memo)
  );
  return (memo[day] = ans);
}

var mincostTickets = function (days, costs) {
  const set = new Set(days);
  const last = days[days.length - 1];
  const first = days[0];
  const memo = new Array(last + 31).fill(undefined);
  return backtracking(first, set, last, costs, memo);
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
