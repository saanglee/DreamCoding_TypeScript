{
  /*
enum type의 문제점
: enum type으로 지정된 변수에 다른 type의 값도 할당할 수 있다. 
enum은 union 타입으로 대체하여 사용할 수 있다. union타입으로 타입을 보장하여 사용해야 한다. 
enum 타입을 사용할 수 밖에 없는 경우 1: mobile client에서 사용하는 native언어에서는 union타입을 표현할 방법이 없기 때문에 enum타입을 사용한다. web client만 사용할 경우에는 enum 사용을 지양한다.
  */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // uniton
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  // enum
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Friday;
  day = Days.Monday;
  day = 10; // 주의: Type에러가 나지 않는다.
  console.log(day);

  // using union
  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
  // dayOfweek = 10; // Type Error: Type '10' is not assignable to type 'DaysOfWeek'.
}
