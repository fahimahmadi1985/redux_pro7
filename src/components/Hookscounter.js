import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incAction, decAction } from "../redux/actions";

export default function Hookscounter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Hooks Counter: {counter}</h3>
      <button onClick={() => dispatch(incAction())}>Increment</button>
      <button onClick={() => dispatch(decAction())}>Decrement</button>
    </div>
  );
}
