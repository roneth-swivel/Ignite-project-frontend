import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  isLoading: false,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees(state, action) {
      state.employees = action.payload;
    },
    addEmployee(state, action) {
      state.employees.push(action.payload);
    },
    updateEmployee(state, action) {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) state.employees[index] = action.payload;
    },
    deleteEmployee(state, action) {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
  },
});

export const { setEmployees, addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
