import { createSlice } from "@reduxjs/toolkit";

const miscSlice = createSlice({
  name: "misc",
  initialState: {
    activeButton: 1,
  },
  reducers: {
    updateActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});

export const { updateActiveButton } = miscSlice.actions;
export default miscSlice.reducer;
