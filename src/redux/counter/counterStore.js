import { createStore } from "redux";
import counterReducers from "./counterReducer";

const store = createStore(counterReducers);

export default store;
