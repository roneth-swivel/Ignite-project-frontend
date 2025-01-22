import { createSlice } from '@reduxjs/toolkit';
import {
  fetchEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../../thunks/employee-thunk';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    createResult: null, // Separate state for create operation result
    updateResult: null, // Separate state for update operation result
    deleteResult: null, // Separate state for delete operation result
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch Employeees
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Create Employee
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.createResult = action.payload; // Store result of creation
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.createResult = { error: action.payload }; // Store error if failed
      })

      // Update Employee
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.updateResult = action.payload; // Store result of update
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.updateResult = { error: action.payload }; // Store error if failed
      })

      // Delete Employee
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.deleteResult = action.payload;
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default employeeSlice.reducer;
