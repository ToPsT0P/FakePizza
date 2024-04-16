import { createSlice } from "@reduxjs/toolkit"
import { IData } from "../../types/Types"
import { PayloadAction } from "@reduxjs/toolkit"


interface DataSlice {
    array: IData[]
    isLoading:boolean
    count: number
}

const initialState: DataSlice = {
    array: [],
    isLoading: false,
    count: 0
}

export const DataSlice = createSlice({
    name: "arrayPizza",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>){
            state.count += action.payload
        },
    }
})


export default DataSlice.reducer;