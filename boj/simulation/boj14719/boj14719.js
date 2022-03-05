const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// H: 세로 길이, W: 가로 길이
const [H, W] = input[0].split(" ");
const world = input[1].split(" ");

let left,
  right,
  temp,
  sum = 0;

for (let i = 1; i < W; i++) {
  left = world[i];
  right = world[i];

  for (let l = 0; l < i; l++) {
    left = Math.max(left, world[l]);
  }

  for (let r = i + 1; r < W; r++) {
    right = Math.max(right, world[r]);
  }

  temp = Math.min(left, right);
  sum += temp - world[i];
}

console.log(sum);
