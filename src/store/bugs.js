import { createAction, createReducer } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


let lastId = 0


const bugsSlice = createSlice({
    name : 'bugs',
    initialState : [],
    reducers : {
        bugAdded : (state , action) =>{
            state.push({
            id: ++lastId, 
            description : action.payload.description,
            resolved : false
        }       )
        }, 
        bugRemoved : (state , action ) =>{
            const id = action.payload.id

            state.filter((bug)=> bug.id!== id)
        },
        bugResolved : (state, action)=>{
            const index = state.findIndex((bug)=> bug.id === action.payload.id)
            state[index].resolved = true
        }
    }
})
 
// actions creators.

// export const bugAdded = createAction('bugAdded')
// export const bugResolved = createAction('bugResolved')
// export const bugRemoved = createAction('bugRemoved')

export const {bugAdded , bugRemoved ,  bugResolved} = bugsSlice.actions
export default bugsSlice.reducer


//selectors 

export const unResolvedBugs =(state)=>{
    return state.entities.bugs.filter((bug)=> !bug.resolved)
}



