# 프로그래머스 체육복 (그리디)

문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript)에서 확인이 가능하다.

## 코드

```javascript
function solution(n, lost, reserve) {
  let answer = 0;

  const sadStudents = reserve.filter((student) => lost.includes(student));
  reserve = reserve
    .filter((student) => !sadStudents.includes(student))
    .sort((a, b) => a - b);
  lost = lost
    .filter((student) => !sadStudents.includes(student))
    .sort((a, b) => a - b);

  reserve.forEach((student) => {
    for (let i = 0; i < lost.length; i++) {
      if (lost[i] - 1 === student || lost[i] + 1 === student) {
        answer++;
        lost.splice(i, 1);
        break;
      }
    }
  });

  answer = n - lost.length;
  return answer;
}
```

## 풀이

예제가 오름차순으로 되어있어서 특별히 정렬할 필요는 없겠지? 라고 생각했다.
하지만 오름차순으로 무조건 예제가 들어온다는 조건은 없으므로, 내가 푼 로직으로 문제를 통과하려면 정렬을 해주어야 한다.

또 하나 놓쳤던 부분은, 여벌의 체육복을 가져온 학생이 체육복을 도난당할 수 있다는 것이다. 이럴 경우에는, lost와 reserve 둘 다에서 제거해주어야 한다.

도난은 한벌만 당하는 것이기 때문에, 자신의 체육복은 남아있기 때문이다.
이 부분만 조심하여 reserve 배열을 반복문을 돌리면서 체육복을 빌린 학생들을 lost에서 제거한다.

마지막으로 n에서 lost에 남은 학생의 수를 빼주면 체육수업을 들을 수 있는 학생의 수를 구할 수 있다.
