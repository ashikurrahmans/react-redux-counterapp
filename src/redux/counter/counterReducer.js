import { DECREMENT, INCREMENT } from "./actionType";
const initialState = {
  value: 0,
};

const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default counterReducers;