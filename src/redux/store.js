import { createStore, combineReducers, applyMiddleware } from "redux";
import { listReducer, loddingReducer } from "./reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  list: listReducer,
  initial: loddingReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
