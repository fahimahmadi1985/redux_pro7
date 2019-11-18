import React from "react";
import { incAction, decAction } from "../redux/actions";
import { connect } from "react-redux";

const Counter = props => {
  return (
    <div>
      <h3>Counter: {props.counter}</h3>
      <button onClick={props.incrementA}>Increment</button>
      <button onClick={props.decrementA}>Decrement</button>
    </div>
  );
};

//mapStateToProps
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

//mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
      incrementA: () => dispatch(incAction()),
    decrementA: () => dispatch(decAction())
  };
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
