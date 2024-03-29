# 프로그래머스 카펫 (완전탐색)

(문제 설명에 첨부되어 있는 사진은 따로 첨부하지 않았습니다)

Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

**제한사항**
갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

**입출력 예**
|brown|yellow|return|
| -- | -- | -- |
| 10 | 2 | [4, 3] |
|8| 1 |[3, 3]|
| 24 | 24 | [8, 6]|

<br/><br/>

### 나의 풀이

처음에 문제를 봤을 때 어떻게 풀어야 하나 막막했는데, 사각형의 특징을 이용하면 풀 수 있겠다는 생각이 들었다.

노란색 사각형을 감싸는 갈색 영역의 가로와 세로는, 각각 노란색 영역의 가로 + 2, 세로 + 2이다.

그래서 2씩 더해준 가로와 세로에 2를 곱하고 서로 더하면 갈색 격자의 개수가 나와야 한다. 입출력 예에서 `brown: 10`, `yellow: 2`를 예로 들어보면, yellow의 가로는 2, 세로는 1이다.

각각 2를 더해주면 (2+2), (1+2) 으로 4, 3이 된다. 가로는 위아래, 세로는 양 옆이므로 각각 2를 곱해준다.

식으로 보면 다음과 같다. `(4 * 2) + (3 * 2) = 14`
결과 값을 보면 14가 나왔다. 14는 brown의 값 10과는 다르다.

그 이유는 갈색 격자의 개수를 계산할 때, 사각형의 각 모서리가 중복으로 카운트되기 때문이다. 그래서 마지막으로 중복된 모서리 개수인 4를 빼준다.

a를 노란색 영역의 가로 길이, b를 노란색 영역의 세로 길이로 두고 식으로 나타내면,<br/>

1. `2(a + 2) + 2(b + 2) - 4 = brown` <br/>
2. `2(a + b + 4) = brown + 4` <br/>
3. `a + b = brown/2 - 2` 로 정리된다.

이 부분을 아래 if문 안에 조건으로 집어넣었다.

```javascript
function solution(brown, yellow) {
  var answer = [];
  for (let i = yellow; i > 0; i--) {
    let j = yellow / i;
    if (i >= j && i + j === brown / 2 - 2) {
      answer.push(i + 2);
      answer.push(j + 2);
    }
  }

  return answer;
}
```
