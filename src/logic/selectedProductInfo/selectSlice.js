import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedItem: [],
}

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    selectItem(state, action) {
      const updatedSelected = [...state.selectedItem]

      if (updatedSelected.length > 0) {
        updatedSelected[0] = action.payload
      } else {
        updatedSelected.push(action.payload)
      }

      state.selectedItem = updatedSelected
    },
  },
})

export const { selectItem } = selectedSlice.actions

export default selectedSlice.reducer
