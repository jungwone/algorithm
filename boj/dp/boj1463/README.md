# 백준 1로 만들기 (boj1463) 자바스크립트 (DP)

문제는 [여기](https://www.acmicpc.net/problem/1463)에서 확인이 가능하다.

## 코드

```javascript
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let n = Number(input);
const arr = Array.from({ length: n + 1 }, () => n);

arr[n] = 0;

while (n > 1) {
  if (n % 3 === 0) {
    const r = Number(n / 3);
    arr[r] = Math.min(arr[r], arr[n] + 1);
  }
  if (n % 2 === 0) {
    const r = Number(n / 2);
    arr[r] = Math.min(arr[r], arr[n] + 1);
  }
  const r = n - 1;
  arr[r] = Math.min(arr[r], arr[n] + 1);

  n--;
}

console.log(arr[1]);
```

## 풀이

DP 문제는 늘 풀기 전에 움추러든다. 그래서 많이 풀어보고 싶다.
하지만 이 문제는 그렇게 어렵지 않았던 것 같다. n부터 시작해서 반복문을 돌리는데 n을 1씩 줄어들게 했다.

반복문 안에서

1. 3으로 나누어 떨어지는 경우
2. 2로 나누어 떨어지는 경우
3. 1을 뺀 경우

이렇게 나누어서 연산 횟수를 저장하도록 했다. 처음에 n은 연산 횟수가 0이므로, n/2, n/3, n-1을 계산한 값에 연산 횟수를 +1 해주면 된다 (arr[n] + 1).

이런 연산을 계속 해나가면 겹치는 숫자들이 발생한다. 예를 들면, n이 10이라고 했을 때, arr[3]을 확인하는 연산은 여러번 일어나게 된다. 9 / **3**, 6 / **2**, 4 - **1** 이 그 예이다.
그럴 때는 자기 자신과 새로 들어온 연산 횟수 중 작은 것을 선택하도록 했다.
