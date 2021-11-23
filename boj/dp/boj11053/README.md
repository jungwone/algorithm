# 백준 가장 긴 증가하는 부분 수열 (boj11053) 자바스크립트 (DP)

문제는 [여기](https://www.acmicpc.net/problem/11053)에서 확인이 가능하다.

## 코드

```javascript
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
const dp = Array.from({ length: N }, () => 1);

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i] && max < dp[j]) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
```

## 풀이

외부 for문에서는 i를 1씩 증가시키고, 내부 for문에서는 i까지 dp 배열을 돌면서 가장 큰 수를 찾는다.
그리고 내부 for문이 끝날 때마다 `dp[i]`를 `max + 1`로 갱신한다.
dp 안에 있는 가장 큰 수를 찾으면 그게 가장 긴 증가하는 부분 수열의 길이다.
