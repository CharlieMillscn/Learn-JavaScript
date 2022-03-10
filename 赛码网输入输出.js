var coinChange = function (coins, amount) {
  const n = coins.length;
  if (n == 0) return -1;
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] <= amount ? dp[amount] : "Impossible";
};
let line;
while ((line = read_line())) {
  if (parseInt(line) === 0) break;
  let temp = read_line()
    .split(" ")
    .slice(1)
    .map((item) => parseInt(item, 0));
  print(coinChange(temp, parseInt(line)));
}
