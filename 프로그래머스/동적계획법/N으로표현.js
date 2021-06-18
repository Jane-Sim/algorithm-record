// [동적계획법]N으로표현
/**
 * 숫자 5와 사칙연산만으로 12를 표현할 수 있다.

12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5
5를 사용한 횟수는 각각 6,5,4 이고, 이중 가장 작은 경우는 4이다.

숫자 N과 number가 주어질 때 N과 사측연산만으로 number를 표현하는 방법 중 N의 최소사용횟수를 반환하라.
 

- 제한사항 

1 <= N <= 9
1 <= number <= 32000
나누기 연산에서 나머지는 무시하기
최솟값이 8보다 크면 -1을 반환
 

- 문제풀이
 

N의 최소 사용횟수가 8번보다 크면 -1을 반환하도록 제한되어있으므로 N을 1번 사용하는 것에서부터 8번사용하는 것까지를 순차적으로 숫자를 만들어보고, 1번부터 8번 집합에 각각 저장합니다. 그리고 number가 만들어졌는지 확인하면 됩니다.
N이 5일때 5는 N을 1번 사용한 것이고, 55는 2번, 555는 3번, 5555는 4번, 55555555는 8번 사용한 것 입니다. 이를 각각의 집합에 미리 추가해줍니다.
1번 집합에 들어갈 수 있는 숫자는 5 하나 밖에 없습니다. 2번 집합에는 55외에 들어갈 수 있는 숫자가 있습니다. N + N, N-N, N*N, N/N. 즉, 1번 집합의 구성요소로 사측연산을 한 것입니다.
3번 집합의 구성은 555와 ( 1번집합의 구성요소 +-*|/ 2번집합의 구성요소),  ( 2번집합의 구성요소 +-*|/ 1번집합의 구성요소) 입니다.
4번 집합의 구성은 5555와 ( 1번집합의 구성요소 +-*|/ 3번집합의 구성요소),  ( 2번집합의 구성요소 +-*|/ 2번집합의 구성요소),  ( 3번집합의 구성요소 +-*|/ 1번집합의 구성요소) 입니다.
만들어진 숫자 중 타겟인 number이 발견되면 바로 집합 번호를 반환하면 됩니다.
순회가 모두 끝난 후에도 number를 발견하지 못했다면, 최소횟수가 8이상인 것이므로 -1를 반환합니다.

 */

function solution(N, number) {
  const s = [new Set()];

  for (let i = 1; i <= 8; i++) {
    // 8개의 배열을 만든다. [5], [55], [555], [5555] .....
    // i갯수의 배열을 만들고, 만들어진 배열 값을 N으로 변경/추가한다. 그 후 문자를 숫자로 바꾼다.
    // ex) array(3) -> [undefined], [undefined], [undefined]
    // ex) fill(5) -> ["5"], ["5"], ["5"]
    // ex) join("") -> ["555"]
    // ex) ["555"] * 1 -> [555]
    s.push(new Set([new Array(i).fill(N).join("") * 1]));
    // j =1 ; i = 3. j가 1부터 시작하는 이유는, 첫 요소는 숫자를 연속해서 붙인 값이기 때문.
    for (let j = 1; j <= i; j++) {
      //  const x1 of s[3] = [{5}]
      for (const x1 of [...s[j]]) {
        // const x2 of s[2] = [{55, 10, 0, 25, 1}]
        for (const x2 of [...s[i - j]]) {
          // 5 + 55 / 5 + 10
          s[i].add(x1 + x2);
          // 5 -55 / 5 - 10
          s[i].add(x1 - x2);
          // 5 * 55 / 5 * 10
          s[i].add(x1 * x2);
          if (x2) {
            // 5/55 / 5/10
            s[i].add(x1 / x2 - ((x1 / x2) % 1));
          }
        }
      }
    }
    // {555, 60, -50, 275, 0, 15, -5,...}.has(12)
    if (s[i].has(number)) {
      return i;
    }
  }

  return -1;
}

solution(5, 12);
