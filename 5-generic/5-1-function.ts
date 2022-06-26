{
  function checkNotNullNumber(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid type!");
    }
    return arg;
  }

  /*
인자로 받은 값이 null타입인지 검사하여 null인 경우 에러메세지를 출력하고, number타입 인자라면 값을 그대로 리턴하는 함수가 있습니다.

그런데 여기서 number타입 말고 다른 타입의 값들도 입력받아 검사하고 싶으면 어떻게 할까요?
*/
  function checkNotNullAny(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  let result = checkNotNullAny(123);
  result = checkNotNullAny("qwe");
  result = 123;
  result = true;
  /*
위 함수는 any타입 또는 null 을 인자로 받을 수 있는 함수입니다. number 타입 외에 다른 타입들도 인자로 들어올 수 있겠죠? 

그런데 문제가 있습니다. 이 함수의 리턴값도 any타입이라는 것이죠. 변수 result에는 어떤 타입의 값도 올 수 있고 이 때 타입이 안전하지 못하게 됩니다. 타입 보장이 안되는 것이죠.

이럴 때 제네릭 타입을 사용합니다! 

인자로 들어온 값의 타입 그대로 리턴이 됩니다. 
따라서 result1의 타입은 number, result2의 타입은 boolean이 되어 타입을 보장하며 사용할 수 있게 됩니다. 
result3에 할당된 함수의 인자로는 string타입이 들어왔죠? 그런데 result3을 boolean타입으로 정의하면 type erro가 발생합니다!
이렇게 타입을 보장하며 사용할 수 있습니다.
*/

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid type!");
    }
    return arg;
  }

  let result1 = checkNotNull(123);
  // result1 = "abc";
  let result2: boolean = checkNotNull(true);
  // const result3: boolean = checkNotNull("hi"); // type error
}
