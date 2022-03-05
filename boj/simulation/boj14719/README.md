# 백준 회의실 배정 (boj14719) 자바스크립트 (구현)

[문제링크](https://www.acmicpc.net/problem/14719)

## 코드

```javascript
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [H, W] = input[0].split(" "); // H: 세로 길이, W: 가로 길이
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
```

## 풀이

오랜만에 풀어서 그런지 뇌에 기름칠이 되어있지 않은 느낌 🤔
결국 고민하다가 다른 사람들이 푼 풀이를 참고했다.

문제를 풀고나서 아래와 같이 정리되었다.

i를 1씩 증가시킨다. i를 현재 나의 위치라고 생각했다.
그리고 매번 증가하는 나의 위치(i)에서 좌측과 우측의 최대값을 각각 찾는다.

좌측과 우측의 최대값중 작은 값을 구한다. 둘 중에 더 작은 높이를 가진 블럭까지만 물이 최대로 고일 수 있기 때문이다.

방금 구한 값(Math.min(left, right))에서 현재 내가 있는 곳에서의 높이를 빼준다.
그러면 내 위치에서 물이 얼마나 고이는지 구할 수 있는데, 이 값을 계속 더하면서 누적하면 답을 구할 수 있다.
