// we will pass an action inside the dispatch, it have 2 properties i-e type and the payload.

// action- it is a plain javaScript object containing the type and the payload.

import React from "react";
import configureStore from "./store/configureStore";
import { bugAdded } from "./store/bugs";
import { bugResolved } from "./store/bugs";


const store = configureStore();


const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded({ description: "pehla bug" }));
store.dispatch(bugAdded({ decription: "sec bug" }));
store.dispatch(bugAdded({ decription: "third bug" }));
// store.dispatch(bugAdded({ decription: "fourth bug" }));

unsubscribe();
store.dispatch(bugResolved({ id: 1 }));

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
