{
  /*
  Type inference 타입추론:
  타입을 따로 명시하지 않아도 에러가 발생하지 않는다.
  다른 타입을 할당하면 에러가 발생한다
  선언과 동시에 문자열을 할당하기 때문에 TS에서 자동으로 String이라고 추론한다. 타입이 뻔한 경우 생략가능한다.

  타입추론, 좋은걸까? 아니... 
  왠만하면 타입을 명시하는 것이 좋다.

  팀, 플젝 할 때 스타일 가이드를 확정해서 타입 명시, 생략 정하는 것이 좋다. 가독성을 위해 일관성있게 작성하는 것이 좋다.

  */

  let text = "hello"; // 이처럼 타입이 뻔한 경우 생략가능하다.

  function print(message = "hello") {
    console.log(message);
  }
  print("hello");
  // print(10)

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
