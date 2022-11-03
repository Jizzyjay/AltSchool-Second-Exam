import React from "react";
import useCounter from "./useCounter";
import "../Styles/Counter.css";

export default function Counter() {
  const { count, dispatch, ACTIONS } = useCounter();

  return (
    <div>
      <div className="counter-container">
        <input
          type="text"
          placeholder="Set Counter Value"
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_VALUE, payload: e.target.value })
          }
        />
        <h2>Count : {count}</h2>
        <div>
          <button
            className="add-btn"
            onClick={() => {
              dispatch({ type: ACTIONS.INCREASE });
            }}
          >
            Increment
          </button>
          <button
            className="dlt-btn"
            onClick={() => {
              dispatch({ type: ACTIONS.DECREASE });
            }}
          >
            Decrement
          </button>
        </div>

        <button
          onClick={() => {
            dispatch({ type: ACTIONS.RESET });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
