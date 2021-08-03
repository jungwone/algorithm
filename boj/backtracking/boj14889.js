// const input = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin").toString()
//     : `6
// 0 1 2 3 4 5
// 1 0 2 3 4 5
// 1 2 0 3 4 5
// 1 2 3 0 4 5
// 1 2 3 4 0 5
// 1 2 3 4 5 0`
// ).split("\n");
// // const N = input[0];
// // const S = input.slice(1).map((line) => line.split(" ").map(Number));

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const N = input[0];
const S = input.slice(1).map((line) => line.split(" ").map(Number));

let check = Array.from({ length: N }, () => 0);
let answer = Number.MAX_SAFE_INTEGER;

function dfs(idx, level) {
  if (answer === 0) return;
  if (level === N / 2) {
    let start = 0;
    let link = 0;
    for (let i = 0; i < N - 1; i++) {
      for (let j = i + 1; j < N; j++) {
        if (check[i] && check[j]) {
          start += S[i][j] + S[j][i];
        } else if (!check[i] && !check[j]) {
          link += S[i][j] + S[j][i];
        }
      }
    }
    // console.log("start :", start, " link : ", link);
    answer = Math.min(answer, Math.abs(start - link));
  } else {
    for (let i = idx; i < N; i++) {
      check[i] = 1; // 방문
      dfs(i + 1, level + 1);
      check[i] = 0; // 방문 해제
    }
  }
}

dfs(0, 0);

console.log(answer);
