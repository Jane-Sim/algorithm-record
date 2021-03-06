// [그리디]체육복
/**
 * 체육복을 도난당한 학생들이 여벌 체육복을 가져온 학생의 체육복을
 * 최대한 빌려입었을 때, 체육 수업을 들을 수 있는 전체 학생 수를 구하시오.
 * 여벌 체육복은 바로 앞, 뒤의 학생에게만 빌려줄 수 있다.
 *
 * 학생 수. 2~30명
 * 도난 당한 학생 수 1~n. 중복X
 * 여벌 체육복 있는 학생 수 1~n. 중복X
 * 여벌 체육복을 가져온 학생도 도난당했을 수 있다. -> 그런 경우 못 빌려줌. (최대 여벌 2개)
 * 총 학생 수 n, 도난당한 학생 번호 배열 lost, 여벌 체육복 가진 학생 번호 배열 reserve
 *
 * 예시
 * n    /   lost    /   reserve     /   return
 * 5    /   [2, 4]      [1, 3, 5]       5
 * 5    /   [2, 4]      [3]             4
 * 3    /   [3]     /   [1]         /   2
 */

function solution(n, lost, reserve) {
  let save = [];
  n = 10;
  lost = [1, 2, 3, 5, 6, 7, 11];
  reserve = [2, 6, 11, 12];
  let newLost = lost.filter((l) => !reserve.find((r) => l === r));
  let newReserve = reserve.filter((r) => !lost.find((l) => r === l));

  if (!newReserve.length || !newLost.length) return n - newLost.length;

  for (let lost_user of newLost) {
    if (newReserve.indexOf(lost_user - 1) > -1) {
      save.push(lost_user - 1);
      newReserve.splice(newReserve.indexOf(lost_user - 1), 1);
    } else if (newReserve.indexOf(lost_user + 1) > -1) {
      save.push(lost_user + 1);
      newReserve.splice(newReserve.indexOf(lost_user + 1), 1);
    }
  }

  return save.length > 0
    ? n - (newLost.length - save.length)
    : n - newLost.length;
}

console.log(solution(0, [], []));
