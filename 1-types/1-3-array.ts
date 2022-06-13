{
  // Array 정의 방법 2가지
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [10, 20, 30];

  function printArray(item: readonly string[]) {
    // item.push
    // Warning: Property 'push' does not exist on type 'readonly string[]'
  }

  // Tuple : 서로 다른 타입의 값을 함께 갖을 수 있는 배열
  // Tuple 사용을 권장하지 않는다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // 가독성이 떨어짐
  // Tuple대신 interface, type alias, class 등으로 대체해서 사용

  // Object destructuring
  const [name, age] = student;
}
