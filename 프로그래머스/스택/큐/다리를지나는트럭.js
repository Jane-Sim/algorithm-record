// [스택/큐]다리를 지나는 트럭 (큐)
/**
 * [문제]
 * 일 차선인 다리를 여러 대의 트럭이 몇 초만에 다 건널 수 있는가?
 * 다리는 정해진 무게만큼 트럭을 올릴 수 있다. 트럭은 1초에 1만큼 움직임.
 * 다리 길이는 bridge_length, 다리의 버티는 무게 weight, 트럭들의 무게 배열 truck_weights
 *
 * [예시]
 * ex) 다리길이 bridge_length = 2, 다리가 버튼 무게 weight = 10(kg)
 * 트럭들의 무게 배열 truck_weights = [7, 4, 5, 6]
 * 경과시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
 *  0	    []	               []	            [7,4,5,6]
 *  1~2	    []	               [7]	            [4,5,6]
 *  3	    [7]		           [4]	            [5,6]
 *  4	    [7]		           [4,5]	        [6]
 *  5	    [7,4]		       [5]	            [6]
 *  6~7	    [7,4,5]		       [6]	            []
 *  8	    [7,4,5,6]	       []	            []
 * 총 8초가 걸림.
 *
 * [제한사항]
 * bridge_length는 1~10,000
 * weight = 1~10,000
 * truck_weights의 배열 요소 갯수 = 1~10,000
 * 각 트럭 무게 = 1~weight. (랜덤)
 */

// 기존 코드
function solution(bridge_length, weight, truck_weights) {
  let timer = 0;
  let bridge = new Array(bridge_length).fill(0);

  while (
    !(bridge.filter((a) => a != 0).length === 0 && truck_weights.length === 0)
  ) {
    timer++;
    if (bridge[0] > 0) {
      bridge[0] = 0;
    }
    for (let i = 0; i < bridge.length - 1; i++) {
      bridge[i] = bridge[i + 1];
      console.log(bridge);
    }
    if (bridge[bridge.length - 1] > 0) {
      bridge[bridge.length - 1] = 0;
    }
    let currentBridgeWg = bridge.reduce((a, b) => a + b);
    if (currentBridgeWg + truck_weights[0] <= weight) {
      bridge[bridge.length - 1] = truck_weights.shift();
    } else {
    }
  }

  return timer;
}

console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));

// 다른 사람의 풀이
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}
