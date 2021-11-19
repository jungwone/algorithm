# 프로그래머스 깊이/너비 우선 탐색 - 타겟넘버 (자바스크립트)

**문제 설명**
n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

```
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

**제한사항**
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
각 숫자는 1 이상 50 이하인 자연수입니다.
타겟 넘버는 1 이상 1000 이하인 자연수입니다.

**입출력 예**
|numbers| target| return|
|--|--|--|
|[1, 1, 1, 1, 1] |3 |5|

### 나의 풀이

numbers 배열을 끝까지 탐색하면서, 자신의 차례일 때 +일 경우와 -일 경우를 나눠서 탐색한다. 더하거나 뺀 값을 다음 재귀함수의 매개변수로 넘겨준다. 끝까지 탐색했을 때 인자로 받은 result가 target과 같은지 확인하고, 같다면 answer에 1을 더해준다.

```javascript
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(level, result) {
    if (level === length) {
      if (result === target) {
        answer++;
      }
    } else {
      dfs(level + 1, result + numbers[level]);
      dfs(level + 1, result - numbers[level]);
    }
  }

  dfs(0, 0);

  return answer;
}
```
