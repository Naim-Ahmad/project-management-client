import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalOpen: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
  },
});

export const { setModalOpen } = projectSlice.actions;
export default projectSlice.reducer;
