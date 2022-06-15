{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  const BEANS_GRAMN_PER_SHOT = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMN_PER_SHOT) {
      throw new Error("Not enough coffee beans");
    }
    coffeeBeans -= shots * BEANS_GRAMN_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 10 * BEANS_GRAMN_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
  /* 출력
  grinding beans for 2
  heating up... 🔥
  Pulling 2 shots... ☕️
  Steaming some milk... 🥛
  { shots: 2, hasMilk: true }
  */
}
