// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let input = `1 5
2
`;
input = input.toString().trim().split("\n");

let answer = 0;
let hasEvenNumber = false;
const S = input[0].split(" ")[0]; // 수열의 길이
const K = input[0].split(" ")[1]; // 삭제할 수 있는 최대 개수
const arr = input[1].split(" ").map((item) => {
  if (Number(item) % 2 === 0) {
    hasEvenNumber = true;
  }
  return +item;
});

let left = 0,
  right = 0,
  count = arr[0] % 2;

while (left <= right && right < S) {
  if (count <= K && right + 1 < S) {
    right++;
    if (arr[right] % 2 === 1) {
      count++;
    }
  } else {
    if (arr[left] % 2 === 1) {
      count--;
    }
    left++;
  }
  if (count <= K) {
    const length = right - left + 1 - count;
    answer = Math.max(length, answer);
  }
}
// if (hasEvenNumber) {
//   answer = Math.max(1, answer);
// }

console.log(answer);
