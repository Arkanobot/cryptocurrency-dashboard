import { createSlice } from "@reduxjs/toolkit";

export const coinDataSlice = createSlice({
  name: "coinData",
  initialState: {
    coins: [],
    cryptoName: "bitcoin",
    cryptoList: [],
  },
  reducers: {
    updateC: (state, action) => {
      state.coins = action.payload;
    },
    updateCryptoName: (state, action) => {
      state.cryptoName = action.payload;
    },
    updateCryptoList: (state, action) => {
      state.cryptoList = action.payload;
    },
  },
});

export const { updateC, updateCryptoName, updateCryptoList } =
  coinDataSlice.actions;
export default coinDataSlice.reducer;
