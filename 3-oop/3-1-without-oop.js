"use strict";
{
    const BEANS_GRAMN_PER_SHOT = 7;
    let coffeeBeans = 0;
    function makeCoffee(shots) {
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
}
