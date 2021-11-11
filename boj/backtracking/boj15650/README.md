# 백준 N과 M(2) 자바스크립트 (백트래킹)

문제는 [여기](https://www.acmicpc.net/problem/15650)에서 확인이 가능하다.

## 코드

```javascript
const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((elem) => +elem);

const N = input[0];
const M = input[1];

const temp = new Array(M);

function dfs(level, start) {
  if (level === M) {
    return console.log(temp.join(" "));
  } else {
    for (let i = start; i < N + 1; i++) {
      temp[level] = i;
      dfs(level + 1, i + 1);
    }
  }
}

dfs(0, 1);
```

N과 M (1) 과 상당히 비슷하다. 이 시리즈는 백트래킹 개념을 익히기에 아주 좋은 것 같다.
N과 M (1)을 풀었을 때와 달리 각 숫자를 사용했는지 확인하는 check 배열도 필요가 없다. (1, 4)를 한 쌍으로 선택했다면 (4, 1)은 선택되서는 안된다.

그래서 반복문 안에서 dfs를 돌릴 때 다음 탐색이 자신의 숫자보다 + 1 높도록 설정한다. 반복문 안에서 dfs에 숫자를 매개변수로 넘겨줄 때 자신보다 낮은 숫자는 탐색할 필요가 없다. 이미 앞에서 다 돌렸을 것이기 때문이다.

나중에 복기하는데 도움이 되려고 이렇게 글로 남기는데.. 참 내 자신이 푼 것을 글로 설명한다는게 쉬운 일이 아닌 것 같다.
