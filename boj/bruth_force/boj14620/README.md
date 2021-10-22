# 백준 꽃밭 (boj14620) 자바스크립트 풀이

문제는 [여기](https://www.acmicpc.net/problem/14620)에서 확인이 가능하다.

## 코드

```javascript
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input = input.trim().split("\n");
const n = +input[0];
let data = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const pos = [];
for (let i = 1; i < n - 1; i++) {
  for (let j = 1; j < n - 1; j++) {
    pos.push([i, j]);
  }
}

const flowers = [];
const length = pos.length;
let result = Infinity;

// 씨앗이 위치할 수 있는 3쌍의 좌표를 모두 구함
for (let i = 0; i < length; i++) {
  for (let j = i + 1; j < length; j++) {
    for (let k = j + 1; k < length; k++) {
      const temp = [];
      temp.push(pos[i]);
      temp.push(pos[j]);
      temp.push(pos[k]);
      flowers.push(temp);
    }
  }
}

// 3개의 씨앗을 동시에 심을 수 있는지 확인한다
for (let flowerComb of flowers) {
  let cost = 0;
  let flag = 0;
  let visited = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  for (let flower of flowerComb) {
    if (visited[flower[0]][flower[1]] === 0) {
      // 씨앗이 심기는 위치도 1로 바꿔줘야 한다.
      visited[flower[0]][flower[1]] = 1;
      cost += data[flower[0]][flower[1]];
    } else {
      flag = 1;
      break;
    }

    for (let i = 0; i < 4; i++) {
      // 상하좌우 확인
      let nx = flower[0] + dx[i];
      let ny = flower[1] + dy[i];
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = 1;
        cost += data[nx][ny];
      } else {
        flag = 1;
        break;
      }
    }
  }
  if (!flag) {
    result = Math.min(result, cost);
  }
}

console.log(result);
```

## 풀이

처음에 금방 풀 수 있을 줄 알았는데, 너무 오래걸렸다. 그래서 다른 사람들은 어떻게 풀었는지 구글링을 좀 해보았다.
다른 사람들의 코드를 살펴보니 내가 접근했던 아이디어는 맞았던 것 같은데, 구현하는 과정에서 뭔가 실수를 한 것 같았다.

꽃잎이 씨앗을 기준으로 상,하,좌,우 로 자라기 때문에, 씨앗이 심어질 수 있는 좌표의 범위는 (1,1) ~ (N-1, N-1) 까지로 설정했다. 꽃잎이 범위 바깥으로 나가면 그 꽃은 죽은 꽃이 되어버리기 때문이다.

그리고 무조건 3개의 씨앗을 심어야 하므로 나올 수 있는 3개의 좌표쌍을 모두 구했다.
그리고 겹치는 꽃잎이 없는지 확인하기 위해 변수 `flag`를 이용했다.

그렇게 어려운 문제는 아닌 것 같은데.. 정확하게 시간 내에 풀 수 있는 연습을 계속해서 해야겠다.
