import { configureStore } from "@reduxjs/toolkit";
import coinDataReducer from "./coinData";

export default configureStore({
  reducer: {
    coins: coinDataReducer,
  },
});
