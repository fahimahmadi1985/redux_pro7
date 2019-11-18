import actionTypes from "./actionTypes";

const initialState = {
  counter: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.increment:
      return (state = { counter: state.counter + 1 });
    case actionTypes.decrement:
      return (state = { counter: state.counter - 1 });
    default:
      return state;
  }
};

export default reducer;
