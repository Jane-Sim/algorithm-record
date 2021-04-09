// 벌집
/**
 * 육각형으로 이루어진 벌집. 1 부터 1씩 증가하는 번호로 각 벌집을 채운다.
 *          5
 *      4       6
 *          1
 *      3       7
 *          2
 * 벌집 중앙 1에서 N번 방까지 최소 몇 번의 방을 지나야 하는가?
 * 1에서 13까지는 3번, 58까지는 5번의 방을 지난다.
 * 무조건 1번 방을 기본적으로 카운트 해야한다. 3번까지 가야한다면,
 * 1번방 3번방을 거치니 2번의 카운트가 이뤄진다.
 * 1번을 감싸는 방의 갯수는 6개. 1~7번을 사용.
 * 1~7번을 감싸는 방의 갯수는 12개. 8~19번을 사용.
 * 8~19번을 감싸는 방의 갯수는 18개. 20~37번을 사용.
 *
 * 카운트가 늘어날 수록, 방을 사용하는 갯수가 6개씩 많아진다.
 * 계차수열. 등차수열의 형식을 띈다.
 *
 * 첫째 항 6. 공차 6.
 * 만약 n이 58이라면, 1 + 6 + (6 + 6) + (6 + 6 + 6) + (6 + 6 + 6 + 6)= 61.
 * 4번 방을 거쳐야, 58이 포함된 최대수 61번 방까지 도달이 가능하다.
 * 1 + (6 * 1) + (6 * 2) + (6 * 3) + (6 * 4)
 * n까지 도달하기 위한 합계
 * while (n > (1 + sum) ) {
 *  sum += (i * 6)
 *   count ++;
 * }
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
const onInput = (value) => (input = value);

const onClose = () => {
  const n = Number(input);
  let sum = 0;
  let count = 1;

  while (n > 1 + sum) {
    sum += count * 6;
    count++;
  }
  console.log(count);

  process.exit();
};

rl.on("line", onInput).on("close", onClose);
