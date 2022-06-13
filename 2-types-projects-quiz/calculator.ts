/**
 * Let's make a calculator 🧮

다섯개의 명령어가 있다.
개수가 제한된 받을 수 있다. -> Union 타입 
두개의 숫자를 받는다.
숫자를 리턴한다.

*/
{
  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("substract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1

  type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

  function calculate(command: Command, a: number, b: number): number {
    // 커맨드 별로 핸들링을 하기위해 switch를 사용한다.
    switch (command) {
      case "add":
        return a + b;
      case "substract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      case "remainder":
        return a % b;
      // 모든 케이스에 해당하지 않을 경우 default작성
      default:
        throw Error("unkown command");
    }
  }
}
