/**
 * Let's make a game 🕹

move -> Union
position -> Descri..
*/

{
  type Direction = "up" | "down" | "left" | "right";
  // type Position = { x: 0; y: 0 };
  // let position: Position = { x: 0, y: 0 };
  const position = { x: 0, y: 0 };
  function move(direction: Direction) {
    switch (direction) {
      case "up":
        // return (position.y += 1);
        position.y += 1;
        break;
      // break를 작성하지 않으면 밑에있는 case들 까지 실행됨
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x += 1;
        break;
      case "right":
        position.x -= 1;
        break;
      default:
        throw new Error(`unknown direction ${direction}`);
    }
  }
  console.log(position); // { x: 0, y: 0}

  move("up");
  console.log(position); // { x: 0, y: 1}

  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
