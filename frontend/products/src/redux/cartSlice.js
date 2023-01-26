import {createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        count: 0,
        products:[],
        loading: false,
        error: ''
    },
    reducers: {
        addToCart(state,action) {
            console.log("reduxer",action.payload._id)
            state.count += 1
            const itemIndex = state.products.findIndex(
                (item) => item._id === action.payload._id
            );
            if(itemIndex >= 0) {
                state.products[itemIndex].cartQuantity +=1;
            }
            else{
                const tempProduct = {...action.payload,cartQuantity:1}
                state.products.push(tempProduct)
            }

        },
        removeFromCart(state, action) {
            state.count -= 1
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer