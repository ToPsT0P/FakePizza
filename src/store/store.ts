import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as cartDataReducer } from "./CartData/CartData.slice";
import { dataReducer } from "./DataAPI/DataAPI.slice";

const reducers = combineReducers({
    cartData: cartDataReducer,
    dataApi: dataReducer
})


export default configureStore({
    reducer: reducers,
})