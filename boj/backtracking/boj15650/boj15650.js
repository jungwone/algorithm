const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((elem) => +elem);

const N = input[0];
const M = input[1];

const temp = new Array(M);

function dfs(level, start) {
  if (level === M) {
    return console.log(temp.join(" "));
  } else {
    for (let i = start; i < N + 1; i++) {
      temp[level] = i;
      dfs(level + 1, i + 1);
    }
  }
}

dfs(0, 1);
