console.log(this); // this = window
// browser환경에서는 window가 global 객체

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // this = window

class Counter {
  counter = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); // this = Counter

// const caller = counter.increase;
const caller = counter.increase.bind(counter); // Counter
caller(); // this = undefined

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this = Bob <--- run함수는 Bob이 불렀기 때문
