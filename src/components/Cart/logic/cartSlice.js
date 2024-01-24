import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  cartItems: [],
  selectedSizes: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const {
        id,
        name,
        price,
        image,
        blurImage,
        selectedSize,
        discounts,
        discountedPrice,
        additionalImage1,
        additionalImage2,
        additionalImage3,
        limited,
        size,
        material,
        DetailsAndCut,
        description,
        season,
        color,
        care1,
        care2,
        care3,
      } = action.payload;
      const cartId = uuidv4();

      const newItem = {
        id: cartId,
        productId: id,
        name,
        image,
        blurImage,
        selectedSize,
        price,
        discounts,
        discountedPrice,
        additionalImage1,
        additionalImage2,
        additionalImage3,
        limited,
        size,
        material,
        DetailsAndCut,
        description,
        season,
        color,
        care1,
        care2,
        care3,
      };

      state.cartItems.push(newItem);
    },

    removeCurrentItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    selectSize(state, action) {
      const { id, size } = action.payload;
      const itemIndex = state.selectedSizes.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.selectedSizes[itemIndex] = { id, size };
      } else {
        state.selectedSizes.push({ id, size });
      }
    },

    removeAll(state) {
      state.cartItems = [];
      state.selectedSizes = [];
    },
  },
});

export const { addToCart, removeAll, selectSize, removeCurrentItem } =
  cartSlice.actions;

export default cartSlice.reducer;
