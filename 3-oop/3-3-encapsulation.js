"use strict";
{
    class CoffeeMaker {
        // 아래 함수 fillCoffeeBeans를 통해 위 coffeeBeans의 개수를 바꿀 수 있도록 함
        // constructor를 private으로 설정하여 생성자로 객체 생성하지 못하도록 하고 아래 함수 makeMachine을 이용하도록 한다.
        constructor(coffeeBeans) {
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMaker(coffeeBeans); // 인스턴스 생성
        }
        fillCoffeeBeans(beans) {
            // if문으로 전달받는 인자beans가 유효한 지 검사, 안전성 높임
            if (beans < 0) {
                throw new Error("Value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        }
        makeCoffee(shots) {
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
    // 외부에서 바로 coffeeBeans와 BEANS_GRAMN_PER_SHOT개수를 바꾸지 않도록 private설정
    CoffeeMaker.BEANS_GRAMN_PER_SHOT = 7;
    // const maker = new CoffeeMaker(32);
    // -> Constructor of class 'CoffeeMaker' is private and only accessible within the class declaration.
    const maker = CoffeeMaker.makeMachine(32); // obj생성
    // maker.coffeeBeans = 3;
    // maker.coffeeBeans = -24; // invalid
    maker.fillCoffeeBeans(32);
    /*
    public : 외부 공개
    private : 외부 비공개, 접근 안됨
    protected : 상속할 때 외부 접근 안되지만 상속받은 자식 클래스에서만 접근 가능
    ✻ 따로 작성 안하면 다 public
  
    보통 class안에서 static 키워들르 붙여 객체 만들 수 있는 함수(makeMachine)를 제공하면, 생성자 new키워드 사용해서 객체 생성하는 것을 금지하기 위해서 쓴 것. 따라서 이 때는 constructor를 private으로 설정해서  static메서드(객체 생성, makeMachine)를 이용하도록 권장하는 것이 더 좋은 방법이다.
  
    캡슐화: 클래스 만들 때 외부에서 접근 가능한 것, 내부적으로만 접근할 수 있는 것 결정한다.
    */
}
