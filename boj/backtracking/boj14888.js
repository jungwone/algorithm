// const input = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin").toString()
//     : `3
// 3 4 5
// 1 0 1 0`
// ).split("\n");

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number); // 숫자 배열
const arr = input[2].split(" ").map(Number); // 연산자

let maxAnswer = Number.MIN_SAFE_INTEGER;
let minAnswer = Number.MAX_SAFE_INTEGER;

function calculate(num1, num2, operator) {
  switch (operator) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    case 2:
      return num1 * num2;
    case 3:
      return num1 < 0 ? parseInt((-num1 / num2) * -1) : parseInt(num1 / num2);

    default:
      break;
  }
}

function dfs(level, result, operators) {
  if (level === N) {
    maxAnswer = Math.max(maxAnswer, result);
    minAnswer = Math.min(minAnswer, result);
  } else {
    for (let i = 0; i < 4; i++) {
      if (operators[i] > 0) {
        const copiedOps = operators.slice();
        copiedOps[i] -= 1;
        dfs(level + 1, calculate(result, A[level], i), copiedOps);
      }
    }
  }
}

dfs(1, A[0], arr);

console.log(maxAnswer ? maxAnswer : 0);
console.log(minAnswer ? minAnswer : 0);

// let check = Array.from({ length: N - 1 }).fill(0);
// let temp = Array.from({ length: N - 1 }).fill("");

// function dfs(level) {
//     if (level === N - 1) {
//       let ACopy = A.slice();
//       for (let i = 0; i < N - 1; i++) {
//         if (temp[i] === "+") {
//           ACopy[i + 1] = ACopy[i] + ACopy[i + 1];
//         } else if (temp[i] === "-") {
//           ACopy[i + 1] = ACopy[i] - ACopy[i + 1];
//         } else if (temp[i] === "*") {
//           ACopy[i + 1] = ACopy[i] * ACopy[i + 1];
//         } else if (temp[i] === "/") {
//           if (ACopy[i] < 0) {
//             ACopy[i + 1] = parseInt(-ACopy[i] / ACopy[i + 1]) * -1;
//           } else {
//             ACopy[i + 1] = parseInt(ACopy[i] / ACopy[i + 1]);
//           }
//         }
//       }
//       maxAnswer = Math.max(maxAnswer, ACopy[N - 1]);
//       minAnswer = Math.min(minAnswer, ACopy[N - 1]);
//     } else {
//       for (let i = 0; i < N - 1; i++) {
//         if (check[i] !== 1) {
//           temp[level] = exp[i];
//           check[i] = 1;
//           dfs(level + 1);
//           check[i] = 0;
//         }
//       }
//     }
//   }

//   dfs(0);

//   console.log(maxAnswer ? maxAnswer : 0);
//   console.log(minAnswer ? minAnswer : 0);
