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
