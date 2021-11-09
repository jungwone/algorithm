// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14
`;

input = input.trim().split("\n");
const n = input[0];
const timeTable = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

timeTable.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }

  return a[0] - b[0];
});

let result = 1;
let endTime = timeTable[0][1];

for (let i = 1; i < n; i++) {
  if (endTime <= timeTable[i][0]) {
    endTime = timeTable[i][1];
    result++;
  }
}

console.log(result);
