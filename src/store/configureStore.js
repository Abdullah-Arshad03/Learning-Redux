import { configureStore } from "@reduxjs/toolkit";
import bugsReducer from '../store/bugs'


// we can simply return the object that is return from this function i-e configureStore.
export default function () {
  return configureStore({
    reducer: bugsReducer,
  });
}
