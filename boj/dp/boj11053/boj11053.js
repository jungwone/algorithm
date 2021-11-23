// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let input = `1
1
`;
input = input.toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
const dp = Array.from({ length: N }, () => 1);

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i] && max < dp[j]) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
