import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.counter;
  });


  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{init.counter}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default Counter;
