import { DECREMENT, INCREMENT } from "./actionType";

export const increments = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
export const decrements = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
