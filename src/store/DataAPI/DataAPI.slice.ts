import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IData } from "../../types/Types";
import axios from "axios";

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
        setData: (state, action: PayloadAction<IData[]>) => {
            state.items = action.payload;
        }
    }
});

export const fetchData = (url: string) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(url);
            dispatch(DataApiSlice.actions.setData(res.data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
};

export const { reducer: dataReducer } = DataApiSlice;