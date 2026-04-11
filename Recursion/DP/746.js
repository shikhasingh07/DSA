var cost = [10, 15, 20]; 
function dp(n) {
  if (n <= 1) return 0;

  return Math.min(
    dp(n - 1) + cost[n - 1],
    dp(n - 2) + cost[n - 2]
  )
}
var minCostClimbingStairs = function (cost) {
  return dp(cost.length);
};

console.log(minCostClimbingStairs([10, 15, 20]));
