function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let arr = array.slice(commands[i][0] - 1, commands[i][1]);
    arr.sort((a, b) => a - b);
    answer.push(arr[commands[i][2] - 1]);
  }

  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commnads = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

const result = solution(array, commnads);
