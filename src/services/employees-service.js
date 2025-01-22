import apiInstance from '../utils/api-adapter'

// API function to create an employee
export const addEmployee = (employeeData) =>
  apiInstance.post("/user", employeeData);

// API function to fetch all employees
export const getEmployees = () =>
  apiInstance.get('/users')

// API function to fetch a single employee by ID
export const getEmployeeById = (id) =>
  apiInstance.get(`/user/${id}`)

// API function to update an employee by ID
export const editEmployee = (id, updatedData) =>
  apiInstance.put(`/update/user/${id}`, updatedData);


// API function to delete an employee by ID
export const removeEmployee = (id) => 
  apiInstance.delete(`/delete/user/${id}`); 
  
