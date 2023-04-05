import React from "react";

const Counter = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <div className="row d-flex justify-content-center ">
        <div className="col-3">
          <div className="card text-center">
            <div className="card-header">
              <h5>Counter</h5>
            </div>
            <div className="card-body">
                <p>{state.count}</p>
            <button
              className="btn btn-primary m-1"
              onClick={() => dispatch({ type: "increment" })}
            >
              +
            </button>
            <button
                className="btn btn-danger m-1"
                onClick={() => dispatch({ type: "reset" })}
                >
                Reset
            </button>
           
            <button
              className="btn btn-primary m-1"
              onClick={() => dispatch({ type: "decrement" })}
              >
              -
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
