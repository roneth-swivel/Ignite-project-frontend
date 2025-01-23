import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getEmployees,
    addEmployee,
    editEmployee,
    removeEmployee
} from '../services/employees-service';

// View (GET all employees)
export const fetchEmployees = createAsyncThunk(
    'employee/fetchEmployees',
    async (_, thunkAPI) => {
        try {
            const response = await getEmployees();
            if (response.status !== 200) {
                throw new Error('Failed to fetch employees');
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Create (POST a new employee)
export const createEmployee = createAsyncThunk(
    'employee/createEmployee',
    async (newEmployee, thunkAPI) => {
        try {
            const response = await addEmployee(newEmployee);
            if (response.status !== 200) {
                throw new Error('Failed to create employee');
            } else {
                alert(response.data.message);
                window.location.reload();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Edit (PUT an existing employee)
export const updateEmployee = createAsyncThunk(
    'employee/updateEmployee',
    async ({ id, updatedEmployee }, thunkAPI) => {
        try {
            const response = await editEmployee(id, updatedEmployee);
            if (response.status !== 200) {
                throw new Error('Failed to update employee');
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Delete (DELETE an employee)
export const deleteEmployee = createAsyncThunk(
    'employee/deleteEmployee',
    async (id, thunkAPI) => {
        try {
            const response = await removeEmployee(id);
            if (response.status !== 200) {
                throw new Error('Failed to delete employee');
            } else {
                alert(response.data.message);
                window.location.reload();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
