// 블랙잭 (브루트포스)
/**
 * N장의 카드 중에서 3장을 골라, 특정 숫자 M의 이하로 최대한 큰 점수를 만들어 이기는 게임.
 * 가장 큰 점수 값을 반환하면 된다.
 *
 * 첫 줄에는, "카드 장수 N" "특정 숫자 M" 이 오고,
 * 두 번째 줄에는, "카드들에 적힌 점수 배열" 이 온다.
 *
 * ex)
 * 5  21
 * 5  6  7  8  9
 *
 * N은 5, M은 21. 5~9의 범위인 카드들 중 3개의 카드를 골라 M에 근접한 점수를 반환시, 21이 나온다.
 * 이때 반복되는 규칙은, 5,6,7 / 5,6,8 / 5,6,9 / 5,7,8/ 5,7,9/ 5,8,9 / 6,7,8, / 6,7,9 / 7,8,9
 * i + i+1 + i+2 / i + i+1 + i+3 / i + i+1 + i+4 / i + i+2 + i+3 / i + i+2 + i+4 . . .
 *
 * 특정 인덱스 값에서 i + i+1 + i+2가 반복되는 반복현상이 있다.
 * 또한 카드 인덱스 값이 뒤로 갈수록 8, 9 쪽 카드는, 앞에서 연산한 내용과 겹친다.
 *
 */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

// 카드 장수 N.
const cardCount = input[0];
// 특정 점수 M.
const cardGoal = input[1];
// 카드들에 적힌 점수 배열.
const cards = input.slice(2);

// 반환할 값.
let total = 0;

for (let i = 0; i < cardCount; i++) {
  for (let j = i + 1; j < cardCount; j++) {
    for (let k = j + 1; k < cardCount; k++) {
      // 현재 3장의 카드를 합친 총 합.
      const currentScore = cards[i] + cards[j] + cards[k];
      // M값 이하이고, total 값보다 크다면, total값을 업데이트한다.
      if (cardGoal >= currentScore && total < currentScore) {
        total = currentScore;
      }
    }
  }
}

console.log(total);
