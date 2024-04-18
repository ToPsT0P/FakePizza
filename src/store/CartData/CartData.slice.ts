import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartData } from "../../types/Types";


const initialState : ICartData[] = []


export const CartDataSlice = createSlice({
    name:"cartData",
    initialState: initialState,
    reducers: 
    {
        addingToCart: (state, action: PayloadAction<ICartData>) => {
            if(state.some(r => r.item.id === action.payload.item.id)) {
                return
                
            } else {state.push(action.payload)}
        },
        
        deleteFromCart: (state, action: PayloadAction<number>) => {
            if(action.payload == -1){
                return state.filter(cartItem => cartItem.item.id == action.payload)
            }
            const itemIdToDelete = action.payload;
            return state.filter(cartItem => cartItem.item.id !== itemIdToDelete);
        },

        changingCount: (state, action: PayloadAction<{itemID: number, newCount: number}>) => {
            
            const {itemID, newCount} = action.payload
            const itemToUpdateIndex = state.findIndex(cartItem => cartItem.item.id === itemID);

            if(newCount > 0){
                state[itemToUpdateIndex].count = newCount
            }            
        },
    }
})

export const {actions, reducer} = CartDataSlice