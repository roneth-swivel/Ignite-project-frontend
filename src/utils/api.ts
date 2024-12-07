import axios from "axios";

// Configure the base URL for your backend
const API_BASE_URL = "http://localhost:7000/api"; 

// Create an instance of Axios with default configurations
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json", 
  },
});

// API function to create an employee
export const createEmployee = async (employeeData: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
}) => {
  try {
    const response = await api.post("/user", employeeData);
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error creating employee.");
  }
};

// API function to fetch all employees
export const fetchEmployees = async () => {
  try {
    const response = await api.get("/users");
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error fetching employees.");
  }
};

// API function to fetch a single employee by ID
export const fetchEmployeeById = async (id: string) => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error fetching employee.");
  }
};

// API function to update an employee by ID
export const updateEmployee = async (
  id: string,
  updatedData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
  }
) => {
  try {
    const response = await api.put(`/update/user/${id}`, updatedData);
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error updating employee.");
  }
};

// API function to delete an employee by ID
export const deleteEmployee = async (id: string) => {
  try {
    const response = await api.delete(`/delete/user/${id}`);
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error deleting employee.");
  }
};
