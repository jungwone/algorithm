function solution(bridge_length, weight, truck_weights) {
  let answer = 0; // 절대시간

  const world = {
    current_weight: 0, // 다리 위의 총 무게
    truck_list: [], // 현재 다리 위를 건너고 있는 트럭의 리스트
  };

  while (true) {
    if (world.truck_list.length === 0 && truck_weights.length === 0) {
      return answer;
    }
    answer += 1; // 1초가 지나감

    // 다리 위를 지나가는 트럭이 있다면....
    if (world.truck_list.length) {
      if (world.truck_list[0].time + bridge_length === answer) {
        world.current_weight -= world.truck_list.shift().weight;
      }
    }

    // 대기중인 트럭이 있다면
    if (truck_weights.length) {
      if (weight >= world.current_weight + truck_weights[0]) {
        let this_truck_weight = truck_weights.shift();
        world.current_weight += this_truck_weight;
        world.truck_list.push({
          time: answer,
          weight: this_truck_weight,
        });
      }
    }
  }
}

let result = solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
console.log(result);
