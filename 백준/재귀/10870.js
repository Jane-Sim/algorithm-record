// 피보나치 수 5 (재귀)
/**
 * 피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0, 1번째 피보나치 수는 1.
 * 그 다음 2번째 부터 바로 앞 두 피보나치 수의 합이 된다.
 * F(n) = F(n-1) + F(n-2) (n >= 2)
 *
 * n=17일 때, 피보나치 수 -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
 * n이 주어질 때, n 번째 피보나치 수를 구하라. n은 20이하. 자연수 또는 0.
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
  //   const n = 10;

  function fav(n) {
    return n < 2 ? n : fav(n - 1) + fav(n - 2);
  }
  console.log(fav(n));

  process.exit();
};

rl.on("line", onInput).on("close", onClose);
