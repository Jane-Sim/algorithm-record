//Node.js의 built-in module인 readline 모듈을 가져온다.
const readline = require("readline");

//createInterface 메소드를 사용하여 인터페이스를 생성한다.
//input에서는 사용자의 입력을 받기 위해 process.stdin을 사용하고
//output에서는 출력 이벤트를 위해 process.stdout을 사용했다.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 앞으로 구현할 프로그램의 실행컨텍스트에 input이라는 변수를 선언했다.
// 아래의 line 이벤트에서 처리할 입력들이 이 곳에 들어오게 될 것이다.
let input = [];

// line 이벤트가 발생할 시의 로직을 실행하는 이벤트이미터를 정의한다.
// 파일을 읽어들이는 중에 줄바꿈문자 /n을 감지하면 'line'이벤트가 일어난다.
// 이 때 읽어들인 내용인 line을 매개변수로 넣어서 콜백에서 처리를 하면된다.
rl.on("line", function (line) {
  //line = "12.12 3 4";
  // 위에서 선언한 input에다가 읽어들인 내용 중 한 줄인 line을 처리하자.
  // 백준에서 입력값은 공백을 기준으로 구분되니 split(' ')을 이용하여 array로 만든 후
  // 이하의 연산에서 정수로 활용되어야 하니 .map((el) => parseInt(el))를 이용하여
  // 모두 정수로 만들어주자.
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  // 아래부터 실제 구현부이다. 문제를 풀 때에는 여기에다가 로직을 구현하면 된다.
  // 아래는 백준 1008번 문제이다.
  const [a, b, c] = input;

  console.log(a, b, c);
  // 프로세스의 실행을 종료하고 프로그램을 끝낸다.
  process.exit();
});
