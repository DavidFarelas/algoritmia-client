import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { mainReducer } from "./mainReducerDuck";

const reducer = combineReducers({
  main: mainReducer,
});

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: [thunk],
});
