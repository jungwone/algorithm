const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const n = Number(input);
const dp = Array.from({ length: n + 1 }, () => 0);
const mod = 10007;

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i < n + 1; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % mod;
}

console.log(dp[n]);
