// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let input = `6
1 0 2 3 3 4
1 1 1 1 1 1
0 0 1 1 1 1
3 9 9 0 1 99
9 11 3 1 0 3
12 3 0 0 0 1
`;

input = input.trim().split("\n");
const n = +input[0];
let data = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const pos = [];
for (let i = 1; i < n - 1; i++) {
  for (let j = 1; j < n - 1; j++) {
    pos.push([i, j]);
  }
}

const flowers = [];

const length = pos.length;

let result = Infinity;

for (let i = 0; i < length; i++) {
  for (let j = i + 1; j < length; j++) {
    for (let k = j + 1; k < length; k++) {
      const temp = [];
      temp.push(pos[i]);
      temp.push(pos[j]);
      temp.push(pos[k]);
      flowers.push(temp);
    }
  }
}

for (let flowerComb of flowers) {
  let cost = 0;
  let flag = 0;
  let visited = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  for (let flower of flowerComb) {
    if (visited[flower[0]][flower[1]] === 0) {
      visited[flower[0]][flower[1]] = 1;
      cost += data[flower[0]][flower[1]];
    } else {
      flag = 1;
      break;
    }

    for (let i = 0; i < 4; i++) {
      let nx = flower[0] + dx[i];
      let ny = flower[1] + dy[i];
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = 1;
        cost += data[nx][ny];
      } else {
        flag = 1;
        break;
      }
    }
  }
  if (!flag) {
    result = Math.min(result, cost);
  }
}

console.log(result);
