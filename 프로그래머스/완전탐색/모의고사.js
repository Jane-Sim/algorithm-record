// [완전탐색]모의고사
/**
 * [문제]
 * 수포자 3명이 아래와 같이 수학 문제를 찍는다.
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 * 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 * 
 * 수학 문제는 answers 배열로 제공된다.
 * 가장 많이 맞힌 사람이 누군지 배열을 반환하라.

 * [제한사항]
 * answers 길이 1~10,000
 * 문제 정답은 1, 2, 3, 4, 5로만 구성.
 * 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬.
 *
 * [예시]
 * answers	    return
 * [1,2,3,4,5]	[1]
 * [1,3,2,4,2]	[1,2,3]
 */

function solution(answers) {
  // 반복되는 수포자의 답 찍는 방식을 담은 배열.
  const sufoja1 = [1, 2, 3, 4, 5];
  const sufoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const sufoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 수포자의 정답 갯수
  let sfj1Cnt = 0;
  let sfj2Cnt = 0;
  let sfj3Cnt = 0;

  // 문제 갯수만큼 포문을 돈다.
  answers.forEach((c, i) => {
    // 각 수포자의 답 찍는 방식을 순회하기 위해, 정답 갯수로 나눈 나머지 값을 통해 인덱스를 구한다.
    let sfj1Idx = i % sufoja1.length;
    let sfj2Idx = i % sufoja2.length;
    let sfj3Idx = i % sufoja3.length;

    // 현재 정답과 수포자 정답이 일치하면 정답 갯수를 늘린다.
    if (c === sufoja1[sfj1Idx]) {
      sfj1Cnt++;
    }
    if (c === sufoja2[sfj2Idx]) {
      sfj2Cnt++;
    }
    if (c === sufoja3[sfj3Idx]) {
      sfj3Cnt++;
    }
  });

  // 수포자의 정답 갯수를 배열에 담고, 최댓값을 구한다.
  let array = [sfj1Cnt, sfj2Cnt, sfj3Cnt];
  const max = Math.max(...array);
  const answer = [];
  // 최댓값과 일치하는 수포자의 인덱스 번호만 새로운 배열에 담아서 반환한다.
  array.forEach((item, index) =>
    item === max ? answer.push(index + 1) : null
  );

  return answer;
}

/** 다른 사람의 풀이로 리팩토링한 코드 */
function solution(answers) {
  let answer = [];
  const list = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let point = [0, 0, 0];

  answers.forEach((answer, i) => {
    list.forEach((li, u) => {
      if (answer === li[i % li.length]) point[u]++;
    });
  });

  const max = Math.max(...point);
  point.forEach((item, index) =>
    item === max ? answer.push(index + 1) : null
  );

  return answer;
}
