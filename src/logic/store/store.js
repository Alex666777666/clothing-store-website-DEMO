import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../addToFavorites/favSlice";
import selectReducer from "../selectedProductInfo/selectSlice";
import cartReducer from "../../components/Cart/logic/cartSlice";
import customerDataSelectReducer from "../addDataCustomerSelect/customerDataSelectSlice";

const store = configureStore({
  reducer: {
    favorites: favReducer,
    selected: selectReducer,
    cart: cartReducer,
    customerDataSelect: customerDataSelectReducer,
  },
});

export default store;
