const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = input[0];
const frame = [];
const score = [];
const TOTAL_RECOMMENDATION = input[1]; // 총 추천 횟수
const recommendations = input[2].split(" ").map((value) => +value);

for (let i = 0; i < TOTAL_RECOMMENDATION; i++) {
  const idx = frame.findIndex((value) => value === recommendations[i]);
  if (idx >= 0) {
    score[idx]++;
  } else {
    if (frame.length >= N) {
      const min = Math.min(...score);
      const minIndex = score.findIndex((value) => value === min);
      frame.splice(minIndex, 1);
      score.splice(minIndex, 1);
    }
    frame.push(recommendations[i]);
    score.push(1);
  }
}

frame.sort((a, b) => a - b);
console.log(frame.join(" "));
