// const input = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin").toString()
//     : `5
// 1000000 1000000 1000000 1000000 1000000
// 5 7`
// ).split("\n");

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const n = input[0];
const a = input[1].split(" ").map((i) => parseInt(i));
const b = parseInt(input[2].split(" ")[0]);
const c = parseInt(input[2].split(" ")[1]);

let count = 0;

a.forEach((student) => {
  console.log(student);
  if (student <= b) count++;
  else count += Math.floor((student - b) / c) + ((student - b) % c ? 2 : 1);
});

console.log(count);
