import { CartDataSlice } from "./CartData/CartData.slice";

export interface RootStateCartData {
  cartData: ReturnType<typeof CartDataSlice.reducer>;
}