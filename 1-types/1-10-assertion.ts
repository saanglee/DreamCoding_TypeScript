{
  /*
Type Assertion 
좋은 방법은 아님 💩
피할 방법을 고민하는 것이 좋다.
JS와 연동되기 때문에 불가피하게 써야할 경우가 있다.

문자열 타입에서 이용가능한 API를 쓸 수 없음 
나 이거 문자열인거 아는데.. 이를 때 type assertion사용
result 변수를 문자열 처럼 사용할 거야. 하고 캐스팅을 할 수 있다.
문자열에서 사용가능한 모든 API를 보여줌 

반대로 result as string 했는데 result가 숫자인 경우
TS에서 코드 작성 시에는 에러가 나지 않음 하지만 실행할 경우 undefined라고 출력됨 
실시간으로 예상하지 못한 문제가 발생할 수 있다

type assertion은 내가 정말 정말 장담할 때만 쓴다.

에러가 나고 어플리케이션이 죽는다.
이처럼 코드를 짤 땐 문제가 없는데 어플리케이션 실행시에 오류가 터지는 것이 JS와 똑같다. 
*/

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  // const result: any / 'result' is declared but its value is never read.
  console.log((result as string).length); // undefined
  console.log((<string>result).length); // undefined

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //  😱 ERROR

  /*
  무조건 배열일거라고 확신해 
  변수 뒤에 ! 를 작성 - 이건 옵션 아니야 이건 절대 값이 있어! 
  optional parameter에서 ? 와 반대되는 개념
  */
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱

  const button = document.querySelector("class")!;
}
