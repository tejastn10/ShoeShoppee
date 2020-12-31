import { combineReducers } from "@reduxjs/toolkit";

const reducers = {};

export const rootReducer = () => {
  const reducer = combineReducers({ ...reducers });
  return reducer;
};
