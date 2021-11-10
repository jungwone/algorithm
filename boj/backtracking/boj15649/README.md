# 백준 N과 M(1) 자바스크립트 (백트래킹)

문제는 [여기](https://www.acmicpc.net/problem/15649)에서 확인이 가능하다.

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

const temp = Array.from({ length: M }, () => 0);
const check = Array.from({ length: N + 1 }, () => 0); // 사용 여부 확인

function dfs(level) {
  if (level === M) {
    const result = temp.join(" ");
    console.log(result);
  } else {
    for (let i = 1; i < N + 1; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        temp[level] = i;
        dfs(level + 1);
        check[i] = 0;
      }
    }
  }
}

dfs(0);
```

## 풀이

1부터 N까지의 숫자 중 M개의 숫자를 중복 없이 뽑는 문제였다.

1부터 시작해서 N까지 숫자를 증가시키면서 자신과 함께 선택될 수 있는 숫자를 고르도록 했다.
N이 4고 M이 2라고 가정해보겠다. 그리고 1부터 확인을 시작한다. 총 2개(M=2)의 숫자를 선택해야 하므로, 하나의 숫자를 더 선택할 수 있다. 주의할 것은 1은 이미 선택을 했기 때문에 또 선택해서는 안된다는 것이다.

그래서 check 배열을 활용했다. 하나의 숫자를 더 탐색할 때 자기 자신을 제외한 숫자를 고르도록 `check[자신의 숫자] = 1` 과 같이 변경해준다. 1은 이미 그 숫자가 사용중이라는 뜻이다.
그럼 반복문을 돌면서 1은 if문에 의해서 제외된다. 선택될 수 있는 숫자는 temp 배열에 넣어준다.

그리고 M개의 숫자가 다 선택되었다면, temp 배열에 들어있는 숫자들을 출력한다. 그러면 작은 숫자부터 증가하도록 수열을 출력할 수 있다.
