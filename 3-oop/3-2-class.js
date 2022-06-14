"use strict";
/*
coffeeMochine 클래스 만들기 + 인스턴스(객체)만들기
coffeeBeans라는 속성, makeCoffee 함수

중복되는 멤버변수 -> static ->  calss level (오브젝트마다 만들어지거나 생성되지 않는다.)
static X -> instance(object) level
*/
/*
   // 내가 한거
  const BEANS_GRAMN_PER_SHOT = 7;

  class CoffeeMachine {
    coffeeBeans: number;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    makeCoffee(shots: number, hasMilk: boolean) {
      if (this.coffeeBeans < shots * BEANS_GRAMN_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * BEANS_GRAMN_PER_SHOT;
      return {
        shots,
        hasMilk,
      };
    }
  }

  const machine1 = new CoffeeMachine(10);
  console.log(machine1.makeCoffee(3, true));

  */
class CoffeeMaker {
    // constructor : class로 인스턴스 생성 시 항상 호출되는 함수
    constructor(coffeeBeans) {
        this.coffeeBeans = 0;
        this.coffeeBeans = coffeeBeans;
        // ()안에 전달된 숫자만큼 coffeeBeans개수 설정
    }
    makeCoffee(shots) {
        // 자신이 속한 class안의 멤버변수 접근 시 this를 붙인다.
        // class level로 지정된 변수는 this대신 class 이름을 사용한다.
        if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMN_PER_SHOT) {
            throw new Error("Not enough coffee beans");
        }
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMN_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        };
    }
}
// class에 멤버 변수 작성 시 const,let 키워드 사용하지 않는다.
CoffeeMaker.BEANS_GRAMN_PER_SHOT = 7;
const maker = new CoffeeMaker(32);
// new키워드는 인스턴스를 생성하고 ()는 생성자constructor를 호출한다.
const maker2 = new CoffeeMaker(40);
console.log(maker);
console.log(maker2);
/*
  BEANS_GRAMN_PER_SHOT은 인스턴스를 만들 때 마다 동일하게 들어있다.
  class에서 한번 정의되고 해당 class를 이용한 모든 인스턴스에서 동일하게 있는 값이 멤버 변수로있으면 obj만들 때 마다 중복되어 메모리를 낭비한다. -> static 키워들를 붙여 class level로 지정한다. (class level은 class와 연결되어 obj마다 생성되지 않는다.)
  ✻ static키워드 안붙이면 instance(object) level이다.

  class는 관련된 속성과 함수들을 묶어 어떤 데이터인 지 정의하는 것이다.
  정의된 클래스에 데이터를 넣어 object를 만든다.
  object마다 새로 만들어져야 하는 데이터는 멤버변수로 만든다.
  obect마다 동일하게 들어있는 데이터는 static 키워드를 사용한다.
  static키워드는 멤버변수와 함수(메서드) 둘다 사용가능 하다.
  */
