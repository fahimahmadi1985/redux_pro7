import actionType from "./actionTypes";

const incAction = () => {
  return {
    type: actionType.increment
  };
};

const decAction = () => {
  return {
    type: actionType.decrement
  };
};

export { incAction, decAction };
