{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  // function printLoginState(state: ResourceLoadState) {
  //   if (state.state === "loading") {
  //     console.log("👀 loading...");
  //   } else if (state.state === "success") {
  //     console.log(state.response.body);
  //   } else {
  //     console.log(state.reason);
  //   }
  // }

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log();
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
