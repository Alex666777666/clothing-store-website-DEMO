import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    userInitials: "",
    userPhoneNumber: "",
    userEmail: "",
    userArea: "",
    userCity: "",
    userDepartment: "",
  },
};

const customerDataSelectSlice = createSlice({
  name: "customerDataSelect",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = customerDataSelectSlice.actions;
export default customerDataSelectSlice.reducer;
