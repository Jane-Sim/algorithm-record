// [heap]이중우선순위큐
/**
 * [문제]
 * 숫자를 추가하는 I, 최솟값/최댓값을 삭제하는 D인 명령어들이 담긴 
 * operations 배열을 통해, 큐를 통해 연산하라.
 * 큐가 비었으면 [0, 0] 반환. 안비었으면 [최댓값, 최솟값]을 반환.
 * 
 * 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제.

 * [제한사항]
 * operations의 배열 갯수는 1~1,000,000개
 * 빈 큐에 데이터 삭제 연산시, 해당 연산은 무시.
 *
 * [예시]
 * operations	                return
 *  ["I 16","D 1"]	            [0,0]
 *  16을 삽입 후 최댓값을 삭제합니다. 비어있으므로 [0,0]을 반환합니다.
 * 
 *  ["I 7","I 5","I -5","D -1"]	[7,5]
 *  7,5,-5를 삽입 후 최솟값을 삭제합니다. 최대값 7, 최소값 5를 반환합니다.
 * 
 */

function solution(operations) {
  let answer = [];
  // 배열 갯수만큼 반복문을 돈다.
  for (let i = 0; i < operations.length; i++) {
    // 명령어에서 숫자값을 꺼낸다.
    const num = Number(operations[i].substring(2));
    // 명령어 I/D 를 꺼낸 뒤 스위치 문을 통해 실행한다.
    switch (operations[i].substring(0, 1)) {
      // I일 경우, 숫자값을 배열에 추가하고 오름차순으로 정렬한다.
      case "I":
        answer.push(num);
        answer.sort((a, b) => {
          return a - b;
        });
        break;
      // D일 경우, 숫자가 1일 때, pop으로 맨 뒤의 요소인 최댓값을 제거한다.
      // -1일 경우 shift로 맨 앞의 요소인 최솟값을 제거.
      // 만약 answer 배열에 추가된 요소가 없으면, 명령어를 무시한다.
      case "D":
        if (answer.length === 0) {
          break;
        }
        if (num === 1) {
          answer.pop();
        } else {
          answer.shift();
        }
        break;
    }
  }
  // 요소가 0개면, 아래와 같이 배열 반환.
  if (answer.length === 0) {
    return [0, 0];
  }

  // 최댓값이 앞에, 최솟값이 뒤에 오도록 배열을 반환한다.
  return [answer[answer.length - 1], answer[0]];
}

console.log(solution(["I 7", "I 5", "I -5", "D -1"]));
console.log(solution(["I 16", "D 1"]));
