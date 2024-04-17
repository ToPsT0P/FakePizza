import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../../types/Types";

interface IDataInitialState {
    items: IData[]
}

const dataInitialState: IDataInitialState = {
    items: []
}

export const DataApiSlice = createSlice({
    name: "dataApiSlice",
    initialState: dataInitialState,
    reducers: {
        fetchingData: (state, action) => {
                
        }
    }
})