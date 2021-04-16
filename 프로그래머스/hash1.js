// [해시]완주하지 못한 선수
/**
 * 마라톤 경기 중 한 명의 선수를 제외하고 완주. 완주 못한 선수의 이름을 반환.
 * 참여자 이름들 participant 배열. / 완주자 이름들 completion 배열.
 * 참여자들의 이름은 중복 가능.
 * 참여자 수 1~100,000
 * 참가자 이름은 알파벳 소문자로, 20자 이하.
 * completion 길이는 participant 길이보다 1 작다.
 */

function solution(participant, completion) {
  let completeMap = new Map();
  for (const person of completion) {
    const mapItem = completeMap.get(person);
    completeMap.set(person, mapItem ? mapItem + 1 : 1);
  }
  for (const person of participant) {
    const mapItem = completeMap.get(person);
    if (!mapItem) {
      return person;
    } else {
      completeMap.set(person, mapItem - 1);
    }
  }
}

// const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// const completion = ["josipa", "filipa", "marina", "nikola"];

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));
