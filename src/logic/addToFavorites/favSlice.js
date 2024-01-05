import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoriteItems: [],
  favoriteColors: {},
}

const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const itemIndex = state.favoriteItems.findIndex(
        item => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.favoriteItems = state.favoriteItems.filter(
          item => item.id !== action.payload.id
        )
        delete state.favoriteColors[action.payload.id]
      } else {
        state.favoriteItems.push(action.payload)
        state.favoriteColors[action.payload.id] = 'red'
      }
    },
  },
})

export const { addToFavorites } = favSlice.actions

export default favSlice.reducer
