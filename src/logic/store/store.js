import { configureStore } from '@reduxjs/toolkit'
import favReducer from '../addToFavorites/favSlice'
import selectReducer from '../selectedProductInfo/selectSlice'

const store = configureStore({
  reducer: {
    favorites: favReducer,
    selected: selectReducer,
  },
})

export default store
