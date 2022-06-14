"use strict";
{
    class CoffeeMachine {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        }
        fillCoffeeBeans(beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        }
        grindBeans(shots) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }
        preheat() {
            console.log("heating up... 🔥");
        }
        extract(shots) {
            console.log(`Pulling ${shots} shots... ☕️`);
            return {
                shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7;
    const maker = CoffeeMachine.makeMachine(30);
    // maker.fillCoffeeBeans(10); 사용 불가
    maker.makeCoffee(2);
    const maker2 = CoffeeMachine.makeMachine(33);
    maker2.fillCoffeeBeans(10);
    maker.makeCoffee(4);
}
