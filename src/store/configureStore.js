import { configureStore } from "@reduxjs/toolkit";
import bugsReducer from './bugs'
import reducers from "./reducers";

// we can simply return the object that is return from this function i-e configureStore.
export default function () {
  return configureStore({
    reducer: reducers,
  });
}
