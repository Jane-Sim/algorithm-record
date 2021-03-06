// [sort]K번째수
/**
 * [문제]
 * 숫자 배열이 담긴 array에서, i번째 숫자~ j번째 숫자까지 자른 배열을 
 * 오름차순으로 정렬 후, k번째 요소를 구하라.
 * 이때, i, j, k 가 담긴 배열은 여러개를 갖고있다. commands = [[i, j, k], [i, j, k] ...]
 * 
 * array에서 각 커맨드를 통해 k번째 요소를 담은 배열을 반환하라.

 * [제한사항]
 * array 길이 1~100
 * array의 각 원소는 1~100
 * commands의 길이 1~50
 * commands의 각 원소는 길이가 3. (왜냐면 i, j, k 밖에 없기때문.)
 *
 * [예시]
 * array                    commands	                         return
 * [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
 * 
 * [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
 * [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
 * [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
 */

function solution(array, commands) {
  var answer = [];
  // 커맨드 길이만큼 반복.
  for (let cm of commands) {
    // 커맨드 요소를 꺼낸 뒤,
    let [i, j, k] = cm;
    // i~j만큼 자른 배열을 오름차순으로 정렬 후 반환할 배열에 k번째 요소 추가.
    let list = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(list[k - 1]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

/** 다른 사람의 풀이 */
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return answer[0] === "0" ? "0" : answer;
}
