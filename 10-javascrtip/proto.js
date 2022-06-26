const x = {};
const y = {};

console.log(x);
console.log(y);

console.log(x.toString());

console.log(x.__proto__ === y.__proto__); // true

const arr = [];
console.log(arr);

console.clear();

function CoffeeMachine(beans) {
  // Instance member level
  this.beans = beans;
  // this.makeCoffee = (shots) => {
  //   console.log("makeing...");
  // };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("makeing...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(10);
console.log(machine1);
console.log(machine2);
