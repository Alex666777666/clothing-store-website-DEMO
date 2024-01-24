import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../addToFavorites/favSlice";
import selectReducer from "../selectedProductInfo/selectSlice";
import cartReducer from "../../components/Cart/logic/cartSlice";

const store = configureStore({
  reducer: {
    favorites: favReducer,
    selected: selectReducer,
    cart: cartReducer,
  },
});

export default store;
