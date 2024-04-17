import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartData, IData } from "../../types/Types";


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
            const itemIdToDelete = action.payload;
            return state.filter(cartItem => cartItem.item.id !== itemIdToDelete);
        }

    }
})

export const {actions, reducer} = CartDataSlice