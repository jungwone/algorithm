function solution(priorities, location) {
  let objArray = [];
  let count = 1;
  for (let i = 0; i < priorities.length; i++) {
    objArray.push({
      priority: priorities[i],
      location: i,
    });
  }
  let obj = {};

  while (objArray) {
    // 내 차례라면
    if (checkIsMyTurn(objArray)) {
      obj = objArray.shift();
      // 내가 찾던 location의 값이 맞는지 체크
      if (obj.location === location) {
        return count;
      } else {
        // 우선순위가 가장 높은데 내가 찾는 값이 아니라면 count만 증가
        count++;
      }
    } else {
      obj = objArray.shift();
      objArray.push(obj);
    }
  }
}

// 배열 내에 더 큰 중요도를 가진 항목이 있으면 반환
function checkIsMyTurn(objArray) {
  let me = objArray[0];
  for (let i = 0; i < objArray.length; i++) {
    if (me.priority < objArray[i].priority) {
      return false;
    }
  }
  return true;
}

solution([1, 1, 9, 1, 1, 1], 0);
