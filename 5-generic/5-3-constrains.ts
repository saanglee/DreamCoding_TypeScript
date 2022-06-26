/*
제네릭의 조건 constraint

직원 interface
  직원에게 월급을 지급 pay()

정직원 클래스 FullTimeEmployee 
- 메서드 workFullTime()

파트타임 클래스 PartTimeEmployee
- 메서드 workPartTime()
*/

interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  // 일하는 함수
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  // 일하는 함수
  workPartTime() {}
}

/*
자동으로 월급을 지불하는 함수 pay()
인자 타입으로 Employee을 받아서, 월급을 지불한 후, Employee을 다시 리턴
*/

function pay(employee: Employee): Employee {
  employee.pay();
  return employee;
}

/*
test code 
*/
const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

ellie.workFullTime();
bob.workPartTime();

// 돈을 받음
const ellieAfterPay = pay(ellie) as FullTimeEmployee;
const bobAfterPay = pay(bob);

// 돈 받은 후에 더 이상 일할 수가 없어요 pay밖에 안뜨네??!
ellieAfterPay.pay();
ellieAfterPay.workFullTime();

/*
pay 어떤 직원이든 인자로 받아와서 지불 한 뒤 직원을 반환
- fullTime, parTime이라는 정보를 잃어버리고 Employee만 반환
- 세부 클래스 정보 없어짐!
as FullTimeEmployee; 이렇게 캐스팅을 하면 풀타임 일하는 함수에 접근 가능하지만, 가능하면 as 쓰는건 좋지 못함 
이럴 때 제네릭을 사용할 수 있습니당 
*/ 1;

const user = {
  name: "sang",
  age: 23,
};

/*
obj와 key를 입력하면 value를 리턴하는 함수 getValue
keyof T : T (객체) 안의 key들 중 하나  
입력되는 것은 객체 안의 key들 중 하나이고 리턴되는 것은 T[K], value타입이어야 한다.
- 조건문을 사용하면 세밀하게 타입을 제한하여 사용할 수 있다.
*/

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// getValue(user, 'id') // Error
getValue(user, "name");
