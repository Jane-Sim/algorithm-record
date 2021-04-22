// [해시]완주하지 못한 선수
/**
 * [문제]
 * n개의 양의 정수. 더하기 빼기로 타겟 넘버를 만든다.
 *
 * [예시]
 * ex) numbers = [1, 1, 1, 1, 1]로 target = 3 을 만드는 갯수를 반환. answer = 5
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 *
 * [제한사항]
 * numbers의 배열 갯수는 2~20개
 * 각 숫자들은 1~50 사이의 랜덤 숫자.
 * target은 1~1000.
 *
 * [예시]
 * ex) numbers = [1, 2, 3]로 target = 3. answer = 1
 * [-1, -2, -3]: -6
 * [-1, -2, +3]: 0
 * [-1, +2, -3]: -2
 * [-1, +2, +3]: 4
 * [+1, -2, -3]: -4
 * [+1, -2, +3]: +2
 * [+1, +2, -3]: 0
 * [+1, +2, +3]: +6
 * 그래프로 표현시 아래와 같다.
 *               -1               +1
 *           -2      +2       -2      +2
 *         -3  +3  -3  +3   -3  +3  -3  +3
 *
 * 해당 배열들이 그래프로 만들어질 수 있고, 모든 노드를 순회해야한다.
 * DFS는 재귀, 스택으로 풀 수 있다.
 */

function solution(numbers, target) {
  var answer = 0;

  // 모든 numbers의 값을 순회할 수 있도록, 재귀함수를 만든다.
  // 0번째 노드부터 자식들의 노드까지 순회하여 target에 맞는 값이 있는지 찾는다.
  const dfs = (node = 0) => {
    // 만약 0번쨰 노드부터 그래프의 마지막 노드까지 순회를 마쳤다면,
    // 해당 자식까지의 노드 값들의 합 sum이 target값과 일치하는지 확인한다.
    if (node === numbers.length) {
      let sum = numbers.reduce((a, b) => a + b);
      if (sum === target) {
        // 해당 자식의 노드까지 값이 일치하면 갯수를 올린다.
        return answer++;
      }
    } else {
      // 루트 노드부터 자식노드까지 순회할 수 있도록,
      // 각자 더하기 빼기 값으로 재귀함수를 돌린다.
      numbers[node] *= 1;
      dfs(node + 1);

      numbers[node] *= -1;
      dfs(node + 1);
    }
  };

  dfs();
  return answer;
}

console.log(solution([1, 2, 3], 2));
