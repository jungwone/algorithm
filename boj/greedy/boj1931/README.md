# 백준 회의실 배정 (boj1931) 자바스크립트 (greedy)

문제는 [여기](https://www.acmicpc.net/problem/1931)에서 확인이 가능하다.

## 코드

```javascript
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input = input.trim().split("\n");
const n = input[0];
const timeTable = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

timeTable.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }

  return a[0] - b[0];
});

let result = 1;
let endTime = timeTable[0][1];

for (let i = 1; i < n; i++) {
  if (endTime <= timeTable[i][0]) {
    endTime = timeTable[i][1];
    result++;
  }
}

console.log(result);
```

## 풀이

처음에 빨리 시작하는 것을 기준으로 정렬을 했는데 잘못 생각했다. 아무리 회의가 빨리 시작하더라도 늦게 끝난다면 많은 회의를 할 수 없다.

그래서 회의가 끝나는 시간을 기준으로 정렬을 하고 문제를 풀었다. 첫번째 회의의 종료시간보다 크거나 같은 다음 회의를 찾고(이때 result++) 그 회의의 종료시간을 새로운 endTime으로 넣어준다.
이런식으로 반복문을 돌리면 답을 얻어낼 수 있다.
