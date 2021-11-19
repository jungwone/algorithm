const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((elem) => +elem);

const N = input[0];
const M = input[1];

const temp = Array.from({ length: M }, () => 0);
const check = Array.from({ length: N + 1 }, () => 0); // 사용했는지 체크

function dfs(level) {
  if (level === M) {
    const result = temp.join(" ");
    console.log(result);
  } else {
    for (let i = 1; i < N + 1; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        temp[level] = i;
        dfs(level + 1);
        check[i] = 0;
      }
    }
  }
}

dfs(0);
