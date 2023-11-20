import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNav: true,
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setShowNav: (state) => {
      state.showNav = !state.showNav;
    },
  },
});
export const { setShowNav } = dashboardSlice.actions;
export default dashboardSlice.reducer;
