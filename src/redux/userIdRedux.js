import { createSlice } from "@reduxjs/toolkit";

const useridStore = createSlice({
    name:'userwithid',
    initialState:{
        name:"",
        email:"",
        lastname:"",
        products:[],
        isFetching: false,
        error: null
    },
    reducers: {
        useridStart: (state) => {
            state.isFetching = true
        },
        useridSuccess: (state,action)=> {
            state.isFetching = false;
            state.email = action.payload.user.email
            state.products = []
        },
        useridFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
    }
})

export const { useridStart, useridFailure , useridSuccess} = useridStore.actions
export default useridStore.reducer;