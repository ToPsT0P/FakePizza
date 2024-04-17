import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as cartDataReducer } from "./CartData/CartData.slice";

const reducers = combineReducers({
    cartData: cartDataReducer
})

export default configureStore({
    reducer: reducers,
})