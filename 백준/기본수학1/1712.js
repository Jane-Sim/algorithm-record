// 손익분기점 (기본수학1)
/**
 * 1년 고정비 A = 1000 / 노트북 1대 비용 B = 70 / 노트북 1대 판매비 C = 170
 * 수입 > 비용 (고정비 + 가변비)
 * 노트북 몇개 팔아야 수익이 나면서 손익분기점을 찍을 수 있을까?
 * ex) 11대
 * 수익 1870 > 비용 (1000 + 770)
 * 수익이 안나면 -1 반환.
 *
 * 추측. 노트북 만드는 가격이 판매 가격보다 무조건 낮아야한다.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
const onInput = (value) => (input = value);

const onClose = () => {
  const [a, b, c] = input.split(" ").map((value) => Number(value));

  //   const a = 1534;
  //   const b = 70;
  //   const c = 170;
  if (b >= c) console.log(-1);
  else {
    let result = a / (c - b) + 1;
    console.log(parseInt(result));
  }

  process.exit();
};

rl.on("line", onInput).on("close", onClose);
