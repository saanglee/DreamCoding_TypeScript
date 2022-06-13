{
  /*
  type Direction = "left" | "right" | "up" | "down";

  function move(direction: Direction) {
    console.log(direction);
  }
  move("up");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 32;

  // 실전 예제
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): Promise<LoginState> {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉${state.response.body}`);
    } else {
      console.log(`😭${state.reason}`);
    }
  }
  => 좋은 방법이 아님
  */
}
