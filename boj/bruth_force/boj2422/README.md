# 백준 한윤정이 이탈리아에 가서 아이스크림을 사먹는데 (boj2422) - 자바스크립트

문제는 [여기](https://www.acmicpc.net/problem/2422)에서 확인이 가능하다.

## 코드

```javascript
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const data = Array.from({ length: 201 }, () => Array.from({ length: 201 }, () => 0));
const [n, m] = input[0].split(" ");

input.slice(1).forEach((v) => {
  const [a, b] = v.split(" ").map((v) => Number(v));
  data[a][b] = data[b][a] = 1;
});

let result = 0;

for (let i = 1; i <= n - 2; i++) {
  for (let j = i + 1; j <= n - 1; j++) {
    if (data[i][j] === 1) continue;

    for (let k = j + 1; k <= n; k++) {
      if (data[i][k] === 1 || data[j][k] === 1) continue;
      result++;
    }
  }
}

console.log(result);
```

## 풀이

처음에 접근했던 풀이법은 금지된 조합을 배열로 따로 저장한 후, 3중 포문을 돌면서 금지된 조합을 반복하면서 확인하는 방식이었다.
N이 작아서 이런식으로 반복을 해도 큰 무리가 없겠다 싶었는데 시간초과가 발생했다. 그래서 방식을 현재 코드와 같이 변경했다.

2차원 배열을 선언하고, 금지된 아이스크림 조합을 2차원 배열의 인덱스로 활용하여 1로 체크해준다. 그리고 3중포문을 똑같이 돈다. 하지만 이번에는 3중 포문 내에서 금지된 조합의 반복문을 돌릴 필요가 없다.

바로 인덱스로 접근해서 금지된 조합인지 확인하면 된다. i, j 까지 돌았을 때 이미 금지 조합이라면 3중 포문까지 들어갈 필요도 없다.
이런 식으로 해결하니 시간초과가 발생하지 않고 잘 통과되었다.

문제를 풀면서 시간초과가 생각보다 많이 발생하는데, 더 효율적으로 코드를 개선할 수 있는 방법을 항상 생각해야겠다.
