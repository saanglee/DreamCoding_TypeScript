/**
 * Let's make a calculator ๐งฎ

๋ค์ฏ๊ฐ์ ๋ช๋ น์ด๊ฐ ์๋ค.
๊ฐ์๊ฐ ์ ํ๋ ๋ฐ์ ์ ์๋ค. -> Union ํ์ 
๋๊ฐ์ ์ซ์๋ฅผ ๋ฐ๋๋ค.
์ซ์๋ฅผ ๋ฆฌํดํ๋ค.

*/
{
  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("substract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1

  type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

  function calculate(command: Command, a: number, b: number): number {
    // ์ปค๋งจ๋ ๋ณ๋ก ํธ๋ค๋ง์ ํ๊ธฐ์ํด switch๋ฅผ ์ฌ์ฉํ๋ค.
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
      // ๋ชจ๋  ์ผ์ด์ค์ ํด๋นํ์ง ์์ ๊ฒฝ์ฐ default์์ฑ
      default:
        throw Error("unkown command");
    }
  }
}
