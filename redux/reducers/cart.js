import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "updateCartCount",
    initialState: {
        cartCount: 0
    },
    reducers: {
        increment: state => {
            state.cartCount += 1
        }
    }
})

export const { increment } = cartSlice.actions

export default cartSlice.reducer