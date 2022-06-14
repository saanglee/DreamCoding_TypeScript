{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAMN_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(number: number) {
      this.coffeeBeans = number;
    }

    static makeMachine(coffeeBeans: number) {
      return new CoffeeMaker(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
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
  // const maker = new CoffeeMaker(30);
  const maker = CoffeeMaker.makeMachine(30);
  console.log(maker); // CoffeeMaker { coffeeBeans: 30 }

  maker.fillCoffeeBeans(10);
  console.log(maker); // CoffeeMaker { coffeeBeans: 40 }

  console.log(maker.makeCoffee(2)); //{ shots: 2, hasMilk: false }
  console.log(maker); // CoffeeMaker { coffeeBeans: 26 }

  const maker2 = CoffeeMaker.makeMachine(15);
  console.log(maker2);
}
