const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 5
10 1 10 6 3 4 8 2`
).split("\n");

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const N = input[0].split(" ").map(Number)[0];
const K = input[0].split(" ").map(Number)[1];
const A = input[1].split(" ").map(Number);

let count = 0; // 내구도가 0이 되는 녀석들을 카운트 할 변수
let step = 0;
let robots = Array.from({ length: A.length }, () => 0);

while (count < K) {
  step++; // 1단계 증가
  count = 0;

  A.unshift(A.pop());
  robots.unshift(robots.pop()); // 컨베이어 벨트와 로봇을 같이 회전시킨다.

  robots[N - 1] = 0;

  // TODO: 벨트 위에 존재하는 로봇을 이동시켜주어야 함.
  for (let i = N - 2; i >= 0; i--) {
    if (robots[i] === 1 && robots[i + 1] === 0 && A[i + 1] >= 1) {
      robots[i + 1] = 1;
      robots[i] = 0;
      A[i + 1] -= 1; // 원래 로봇이 올라갈 자리 -1
    }
  }

  robots[N - 1] = 0;

  if (robots[0] === 0 && A[0] >= 1) {
    // 올리는 곳에 로봇이 없고 내구도가 1 이상인지 확인
    robots[0] = 1;
    A[0] -= 1;
  }

  A.forEach((num) => {
    if (num === 0) {
      count++;
    }
  });

  if (count >= K) {
    break;
  }
}

console.log(step);
