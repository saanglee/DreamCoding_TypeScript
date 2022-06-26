{
  // 10.5 Index Type
  const obj = {
    name: "sangji",
  };

  obj.name; // snagji
  obj["name"]; // sangji

  // type도 index를 기반으로 타입을 결정할 수 있다.

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "femail";
  };

  type Name = Animal["name"];
  // type Animal의 name 키의 type string을 type Name으로 선언
  const text: Name = "Bom";
  // const text2: Name = 12 // Error

  type Gender = Animal["gender"]; // "male" | "femail"

  type Kyes = keyof Animal; // 'name' | 'age' | 'gender'
  const key1: Kyes = "name";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "sang",
    gender: "femail",
  };
}
