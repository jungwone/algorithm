# 백준 주유소 (boj13305) 자바스크립트 풀이

문제는 [여기](https://www.acmicpc.net/problem/13305)에서 확인이 가능하다.

## 코드

```javascript
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const n = Number(input[0]);
const distance = input[1].split(" ").map((km) => BigInt(km));
const cost = input[2].split(" ").map((money) => BigInt(money));

let currentPrice = cost[0]; // 초기에는 일단 첫번째 도시에서의 주유 비용
let result = BigInt(0); // 총 비용을 누적할 변수

for (let i = 0; i < n - 1; i++) {
  result += currentPrice * distance[i];

  if (currentPrice > cost[i + 1]) {
    currentPrice = cost[i + 1];
  }
}

console.log(result.toString());
```

## 풀이

처음에 20분정도 고민해 봤는데 솔루션이 생각이 안나서 다른 사람들의 풀이를 참고했다.

내가 현재 머물고 있는 도시의 오른쪽 도시를 살피면서, 현재 도시의 기름 값보다 싸다면 `currentPrice`에 다음 도시의 기름 값을 대입한다.

그러면 다음 도시에서 기름을 넣을 때 더 싼 가격으로 기름을 넣게 된다. (currentPrice를 더 싼 가격으로 수정했기 때문)

다음 도시의 기름 값이 더 비싸다면 currentPrice를 수정하지 않는다. 그러면 아직까지 제일 괜찮은 currentPrice 값이 유지되고, 아직 좋은 가격을 유지하고 있는 currentPrice에 다음 마을로 이동할 km를 곱해준다.

다음 마을로 이동할 km를 유지되고 있는 currentPrice에 곱해주는 것은, 더 싼 마을에서 내가 지금 이동해야할 기름까지 미리 넣는 것과 같은 의미다.

이 아이디어로 코드를 작성하면 짧은 코드로 문제를 해결할 수 있다.
