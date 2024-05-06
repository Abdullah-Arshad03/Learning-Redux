import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

let lastId = 0

const projectsSlice = createSlice({
    name : 'projects',
    initialState  : [],
    reducers : {
        createProject : (state , action)=>{
            state.push({
               id : ++lastId, 
               name : action.payload.name
            })
        }
    }
})
export const {createProject} = projectsSlice.actions
export default projectsSlice.reducer