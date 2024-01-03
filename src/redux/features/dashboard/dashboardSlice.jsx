import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNav: true,
  query: "?verified=true&role=employee&name=''&page=1&sort=asc",
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setShowNav: (state, action) => {
      // console.log(action)
      state.showNav = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});
export const { setShowNav, setQuery } = dashboardSlice.actions;
export default dashboardSlice.reducer;
