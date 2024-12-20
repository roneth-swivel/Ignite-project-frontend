import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employeeSlice";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
