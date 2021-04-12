// 팩토리얼 (재귀)
/**
 * 0보다 크거나 같은 정수 N이 주어진다. 이 때 n!값을 구하여라
 * n은 정수 0 ~ 12 값을 가질 수 있다.
 * n이 0일 때, 1을 반환해야 한다.
 *
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

  if (n == 0) console.log(1);
  else {
    let factorial = (n) => {
      if (n == 1) return 1;
      return n * factorial(n - 1);
    };

    console.log(factorial(n));
  }

  process.exit();
};

rl.on("line", onInput).on("close", onClose);
