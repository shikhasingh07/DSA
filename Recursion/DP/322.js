function backtacking(coins, idx, len, amount, memo) {
  if (amount === 0) {
    return 0;
  }

  if (amount < 0) {
    return Infinity;
  }

  if (len === idx) {
    return Infinity;
  }

  if (memo[idx] && memo[idx][amount] !== undefined) {
    return memo[idx][amount];
  }

  let take = 1 + backtacking(coins, idx, len, amount - coins[idx], memo);

  let skip = backtacking(coins, idx + 1, len, amount, memo);

  if (!memo[idx]) memo[idx] = [];
  memo[idx][amount] = Math.min(take, skip);

  return memo[idx][amount];
}

var coinChange = function (coins, amount) {
  return backtacking(coins, 0, coins.length, amount, []) === Infinity
    ? -1
    : backtacking(coins, 0, coins.length, amount, []);
};

console.log(coinChange([1, 2, 5], 11));
