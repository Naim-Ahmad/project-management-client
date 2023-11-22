import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNav: true,
  query: "?varified=true&role=employee&name=''&page=1",
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setShowNav: (state) => {
      state.showNav = !state.showNav;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});
export const { setShowNav, setQuery } = dashboardSlice.actions;
export default dashboardSlice.reducer;
