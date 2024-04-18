import { CartDataSlice } from "./CartData/CartData.slice";
import { DataApiSlice } from "./DataAPI/DataAPI.slice";

export interface RootStateCartData {
  cartData: ReturnType<typeof CartDataSlice.reducer>;
}

export interface RootStateAllData{
  dataApi: ReturnType<typeof DataApiSlice.reducer>

}
