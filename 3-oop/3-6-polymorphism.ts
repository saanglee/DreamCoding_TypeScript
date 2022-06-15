{
  type CoffeeCup = {
    shots: number;
    // optional
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    // 함수 정의
    makeCoffee(shots: number): CoffeeCup;
  }

  // 부모 클래스
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    // 인스턴스 생성 함수
    static makeMachine(beans: number): CoffeeMachine {
      return new CoffeeMachine(beans);
    }
    // 커피콩 채우는 함수
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    // 청소 함수
    clean(): void {
      console.log("cleaning the machine...🧼");
    }
    // 커피콩 가는 함수
    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans~!⚠️");
      }
      console.log(`grinding beans for ${shots}`);
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }
    // 예열 함수
    private preheat(): void {
      console.log("heating up... 🔥");
    }
    // 에스프레소 추출 함수
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }
    // 커피 만드는 함수!
    // (커피 갈고, 기계 예열하는 함수 호출 & 에스프레소 추출 함수  리턴)
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // CoffeeMachine 상속받는 라떼머신 클래스
  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // Constructors for derived classes must contain a 'super' call
      super(beans);
    }

    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // 부모 클래스의 함수에 접근 시 super키워드를 사용한다.
      this.steamMilk();

      return {
        ...coffee, // 부모 클래스 함수 호출한 리턴값들
        hasMilk: true,
      };
    }
  }
  // offeeMachine 상속받는 설탕 추가 클래스
  class SweetCoffeeMachine extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      console.log("sugar🍬");

      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(23),
    new CaffeeLatteMachine(20, "sss"),
    new SweetCoffeeMachine(11),
    new CoffeeMachine(23),
    new CaffeeLatteMachine(20, "sss"),
    new SweetCoffeeMachine(11),
  ];

  machines.forEach((machine) => {
    console.log("-----------------------------");
    machine.makeCoffee(1);
  });
}
