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
