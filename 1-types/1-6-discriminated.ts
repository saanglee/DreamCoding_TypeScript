import { type } from "os";

{
  // function: login -> success, fail ⏱
  /* 
  각 union안에 동일한 키, 하지만 각 state별로 다른 값을 가지도록 만듦 (result키 안에 각 succes, fial 값)
   */
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success", // type(SuccessState, FailSatate)이 보장 되면서 다른 state를 만들 수 있다.
      response: {
        body: "logged in!",
      },
    };
  }
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      // state의 결과가 success이면, (=state안의 result의 값이 success이면)
      console.log(state.response.body);
    } else {
      // state안의 result의 값이 fail이면,
      console.log(state.reason);
    }
  }
  // discriminated union사용 - 더 직관적으로 코드 작성 가능하다.
  // 공통적인 property를 갖게 만들어 구분하기 쉽게? 만든다.
}
