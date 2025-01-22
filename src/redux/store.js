<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employee-slice";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
=======
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employeeSlice";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
>>>>>>> cf32ca5666d4a905c419013e5ca8adffb28eee7c
