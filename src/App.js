// we will pass an action inside the dispatch, it have 2 properties i-e type and the payload.

// action- it is a plain javaScript object containing the type and the payload.

import React from "react";
import configureStore from "./store/configureStore";
import { bugAdded } from "./store/bugs";
import { bugResolved } from "./store/bugs";
import { createProject } from "./store/projects";
import { unResolvedBugs } from "./store/bugs";


const store = configureStore();


const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded({ description: "pehla bug" }));
store.dispatch(bugAdded({ decription: "sec bug" }));
store.dispatch(bugAdded({ decription: "third bug" }));

console.log('following dispatching the action from the projects slice')
store.dispatch(createProject({name : 'first Project!'}))
// store.dispatch(bugAdded({ decription: "fourth bug" }));


unsubscribe();
store.dispatch(bugResolved({ id: 1 }));

// const unResolvedBugs = store.getState().entities.bugs.filter((bug)=> !bug.resolved)
// console.log('these are the unresolved bugs! ', unResolvedBugs)
const unResolvedbugs = unResolvedBugs(store.getState())
console.log('these are the unresolved with the selector approach : ', unResolvedbugs)

// store.dispatch(bugResolved())

unsubscribe();

// store.dispatch({
//   type : BUG_REMOVED ,
//   payload : {
//     id : 1
//   }
// })



console.log(store.getState());

const App = () => {
  return <div>App</div>;
};

export default App;
