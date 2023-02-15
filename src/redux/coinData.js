import { createSlice } from "@reduxjs/toolkit";

export const coinDataSlice = createSlice({
  name: "coinData",
  initialState: {
    coins: [],
  },
  reducers: {
    updateC: (state, action) => {
      state.coins = action.payload;
    },
  },
});

export const { updateC } = coinDataSlice.actions;
export default coinDataSlice.reducer;
