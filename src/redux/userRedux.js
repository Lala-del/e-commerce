import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name:'user',
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false,
        token: null,
        email: null,
        products: []
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state,action)=> {
            state.isFetching = false;
            state.currentUser = action.payload
            state.token = action.payload.accessToken
            state.email = action.payload.user.email
            state.products = []
            console.log(state.email)
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        logout:  (state) => {
            state.isFetching = true;
            state.token = null;
        }
    }
})

export const { loginSuccess, loginFailure , loginStart, logout} = userStore.actions
export default userStore.reducer;