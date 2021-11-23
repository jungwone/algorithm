# 백준 가장 긴 짝수 연속한 부분 수열 (small) (boj22857) 자바스크립트 (DP)

문제는 [여기](https://www.acmicpc.net/problem/22857)에서 확인이 가능하다.

## 코드

```javascript
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let answer = 0;
let hasEvenNumber = false;
const S = input[0].split(" ")[0]; // 수열의 길이
const K = input[0].split(" ")[1]; // 삭제할 수 있는 최대 개수
const arr = input[1].split(" ").map((item) => {
  if (Number(item) % 2 === 0) {
    hasEvenNumber = true;
  }
  return +item;
});

let left = 0,
  right = 0,
  count = arr[0] % 2;

while (left <= right && right < S) {
  if (count <= K && right + 1 < S) {
    right++;
    if (arr[right] % 2 === 1) {
      count++;
    }
  } else {
    if (arr[left] % 2 === 1) {
      count--;
    }
    left++;
  }
  if (count <= K) {
    const length = right - left + 1 - count;
    answer = Math.max(length, answer);
  }
}
if (hasEvenNumber) {
  answer = Math.max(1, answer);
}

console.log(answer);
```

## 풀이

4 제출만에 겨우 **맞았습니다!** 가 떴다. 후 ....

처음에 어떻게 풀어야할지 몰라서 다른 사람들이 푼 코드를 참고하려고 했더니, 블로그에 올라와 있는 글을 찾기가 힘들었다.

그래서 문제를 다시 확인해보니 맞힌 사람이 58명밖에 되지 않는 문제였다. 다음부터는 푼 사람들이 좀 많은 문제를 풀어야 될 것 같다. 그래야 잘 풀리지 않을 때 참고가 가능하니 ...
그래도 C++로 푼 풀이가 하나 있어서 그 풀이를 참고했다.

**투포인터**로 문제를 해결했다. 그래서 `left`와 `right`라는 변수를 사용했다.
`count` 변수는 `left`부터 `right`까지 홀수의 개수를 저장하기 위한 변수다.

left부터 right까지 범위에서 가장 긴 짝수의 연속한 부분 수열을 구하기 위한 식은 아래와 같다.

```javascript
right - left + 1 - count;
```

`right - left + 1`은`left`부터 `right`까지 숫자의 개수다. `count`는 `left`부터 `right`까지 존재하는 홀수의 개수다.

그래서 위의 식을 계산하면 `left`부터 `right`까지 가장 긴 짝수의 연속 부분 수열의 길이를 구할 수 있다. 그 값 중 가장 큰 값을 `answer`에 저장하면 올바른 답을 구할 수 있다.
