import { createSlice } from "@reduxjs/toolkit";

const miscSlice = createSlice({
  name: "misc",
  initialState: {
    activeButton: "1D",
    currentChart: "Bar - Vertical",
  },
  reducers: {
    updateActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
    updateCurrentChart: (state, action) => {
      state.currentChart = action.payload;
    },
  },
});

export const { updateActiveButton, updateCurrentChart } = miscSlice.actions;
export default miscSlice.reducer;
