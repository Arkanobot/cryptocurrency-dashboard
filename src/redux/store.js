import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencyData";
import coinDataReducer from "./coinData";

export default configureStore({
  reducer: {
    coins: coinDataReducer,
    currency: currencyReducer,
  },
});
