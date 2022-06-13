/*
union은 발생할 수 있는 모든 케이스 중 하나만 선택하는 것이었다면 -> OR성격
intersection은 모든 걸 다 합한? 성격? -> AND같은 개념!
*/

{
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };
  function internWork(person: Student & Worker) {
    console.log(person.name, person.work, person.employeeId, person.work());
  }

  internWork({
    name: "Sangji",
    score: 1,
    employeeId: 123,
    work: () => {},
  }); // 다양한 타입들을 하나로 묶어 사용가능하다.
}
