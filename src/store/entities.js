// this file contain all the entities like bugs, projects inside the entities.

import { combineReducers } from "redux";
import projectReducer from "./projects";
import bugsReducer from "./bugs";


export default combineReducers({
     bugs : bugsReducer,
     projects : projectReducer
})




