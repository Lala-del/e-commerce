import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({
    name:"cart",
    initialState: {
        products:[],
        quantity:0,
        total:0
    },
    reducers: {
        addProduct: (state, action) => {
            console.log(action.payload)
            state.quantity += action.payload.quantity; // card quantity
            state.products.push(action.payload);
            state.total +=  action.payload.price * action.payload.quantity;
        }
    }
})

export const {addProduct} = cartStore.actions
export default cartStore.reducer