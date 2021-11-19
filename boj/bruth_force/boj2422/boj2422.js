// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let input = `5 3
1 2
3 4
1 3
`;

const data = Array.from({ length: 201 }, () => Array.from({ length: 201 }, () => 0));
input = input.trim().split("\n");
const [n, m] = input[0].split(" ");

input.slice(1).forEach((v) => {
  const [a, b] = v.split(" ").map((v) => Number(v));
  data[a][b] = data[b][a] = 1;
});

let result = 0;

for (let i = 1; i <= n - 2; i++) {
  for (let j = i + 1; j <= n - 1; j++) {
    if (data[i][j] === 1) continue;

    for (let k = j + 1; k <= n; k++) {
      if (data[i][k] === 1 || data[j][k] === 1) continue;
      result++;
    }
  }
}

console.log(result);
