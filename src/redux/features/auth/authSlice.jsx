import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
