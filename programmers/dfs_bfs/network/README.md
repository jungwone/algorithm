# 프로그래머스 네트워크 자바스크립트 풀이

문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript)에서 확인할 수 있다.

## 코드

```javascript
function solution(n, computers) {
  var answer = 0;
  const visited = Array.from({ length: n }, () => 0);

  function dfs(index) {
    visited[index] = 1;
    for (let i = 0; i < n; i++) {
      if (computers[index][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer += 1;
    }
  }

  return answer;
}
```

## 풀이

오랜만에 풀어보기도 하고 레벨이 3으로 되어 있어서 조금 쫄았는데, 그렇게 어려운 문제는 아니었다.
dfs혹은 bfs로 탐색하면서, 아직 방문하지 않은 컴퓨터가 있을 때마다 answer을 +1씩 해주면 된다.
나는 방문 표시를 위한 배열로 `visited` 배열을 생성했고, 음.. 정말 뭐 크게 어려운 부분이 없다.
