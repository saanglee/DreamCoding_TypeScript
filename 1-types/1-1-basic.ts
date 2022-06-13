{
  const num: number = 10;
  const str: string = "hello";
  const boal: boolean = false;

  // undefined
  let age: number | undefined; // 숫자 또는 undefined를 할당할 수 있다.  optional type
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return;
  }
  // 찾으면 숫자, 못찾았다면 undefined를 리턴하는 함수

  // null
  let person: string | null; // 값이 있거나 없을 수 있다.

  // 보편적으로는 undefined를 더 사용한다.

  // unknown 💩
  // 어떤 종류의 데이터가 담길 지 알 수 없음
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }

  // never
  // 리턴하지 않는 함수
  // 예상치못한, 핸들링할 수 없는 에러 발생 시에 호출하는 함수. 발생한 에러메세지를 서버로 보내서 로그를 남기고 어플리케이션에서 에러를 표시할 수 있다. 에러 던진 후 어플리케이션은 죽는다.
  function throwError(message: string): never {
    // meessage -> server(log)
    throw new Error(message);
  } // never라고 명시해하여 함수 리턴값이 없음을 알림

  // 에러던지거나 함수 리턴되지 않는 경우2
  function throwError2(message: string): never {
    while (true) {}
  }

  // object💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "SJ" });
  // 쓰지 않는 것이 좋음
}
