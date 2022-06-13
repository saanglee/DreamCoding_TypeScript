{
  /*
  // JS 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TS
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JS
  function jsFetchNum(id) {
    // code...

    return new Promise((resolve, rejects) => {
      resolve(100);
    });
  }

  // TS
  function jsFetchNum(id: string): Promise<number> {
    // code...

    return new Promise((resolve, rejects) => {
      resolve(100);
    });
    */

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName("Sangji", "Lee");
  printName("Bomi");
  printName("Ana", undefined);

  function printName2(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  // printName2("Janggun");

  // Default Parameter
  function printMessage(message: string = "default meesage") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  // 동일한 타입의 값을 개수 상관없이 함수 인자로 전달 받는다.
  // 타입: 숫자 배열
  function addNumbers(...numbers: number[]) {
    return numbers.reduce((a, b) => a + b); // 배열 총합 구하기
  }

  // console.log(addNumbers(1, 2, 3, 4));
  // console.log(addNumbers(1, 2, 3, 4, 5, 0));

  type Bom = "Sangji's cat";
  let bom: Bom;
  bom = "Sangji's cat";
  console.log(bom);
}
