import { createSlice } from "@reduxjs/toolkit";

const newuserStore = createSlice({
    name:'newuser',
    initialState:{
        newUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        registerStart: (state) => {
            state.isFetching = true
        },
        registerSuccess: (state,action)=> {
            state.isFetching = false;
            state.newUser = action.payload
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true
        }
    }
})

export const { registerSuccess, registerFailure , registerStart} = newuserStore.actions
export default newuserStore.reducer;