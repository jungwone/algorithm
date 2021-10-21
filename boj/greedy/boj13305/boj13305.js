const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const n = Number(input[0]);
const distance = input[1].split(" ").map((km) => BigInt(km));
const cost = input[2].split(" ").map((money) => BigInt(money));

let currentPrice = cost[0]; // 초기에는 일단 첫번째 도시에서의 주유 비용
let result = BigInt(0); // 총 비용을 누적할 변수

for (let i = 0; i < n - 1; i++) {
  result += currentPrice * distance[i];

  if (currentPrice > cost[i + 1]) {
    currentPrice = cost[i + 1];
  }
}

console.log(result.toString());
