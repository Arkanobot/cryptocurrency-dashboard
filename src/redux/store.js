import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencyData";
import coinDataReducer from "./coinData";
import daysDataReducer from "./daysData";
import miscDataReducer from "./misc";

export default configureStore({
  reducer: {
    coins: coinDataReducer,
    currency: currencyReducer,
    days: daysDataReducer,
    misc: miscDataReducer,
  },
});
