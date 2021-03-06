{
  /*
  // JS π©
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
  // λμΌν νμμ κ°μ κ°μ μκ΄μμ΄ ν¨μ μΈμλ‘ μ λ¬ λ°λλ€.
  // νμ: μ«μ λ°°μ΄
  function addNumbers(...numbers: number[]) {
    return numbers.reduce((a, b) => a + b); // λ°°μ΄ μ΄ν© κ΅¬νκΈ°
  }

  // console.log(addNumbers(1, 2, 3, 4));
  // console.log(addNumbers(1, 2, 3, 4, 5, 0));

  type Bom = "Sangji's cat";
  let bom: Bom;
  bom = "Sangji's cat";
  console.log(bom);
}
