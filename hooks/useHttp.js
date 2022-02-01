import { useReducer } from "react";

const httpInitialState = {
  data: null,
  error: null,
  status: null,
};

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      status: "pending",
      error: null,
      data: null,
    };
  }

  if (action.type === "ERROR") {
    return {
      status: "completed",
      error: action.error,
      data: null,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      error: null,
      data: action.response,
    };
  }

  return state;
}

function useHttp() {
  const [httpState, dispatch] = useReducer(httpReducer, httpInitialState);

  async function sendRequest(requestConfig) {
    try {
      dispatch({ type: "SEND" });
      const { url, method, headers, body } = requestConfig;
      const response = await fetch(url, {
        method: method ? method : "GET",
        body: body ? JSON.stringify(body) : null,
        headers: headers ? headers : {},
      });

      const data = await response.json();
      dispatch({ type: "SUCCESS", response: data });
    } catch (error) {
      dispatch({ type: "ERROR", error: error.message });
    }
  }

  return {
    data: httpState.data,
    error: httpState.error,
    status: httpState.status,
    sendRequest,
  };
}

export default useHttp;
