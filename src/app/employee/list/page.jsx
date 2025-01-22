<<<<<<< HEAD
"use client"; // Mark this file as a client-side component

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployees,
  updateEmployee,
  deleteEmployee
} from '../../../thunks/employee-thunk';
import EmployeeRecords from "../../../components/EmployeeRecords";

const EmployeeList = () => {
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  // Global Redux State for employee list
  const {
    data,
    status,
    error,
    updateResult
  } = useSelector((state) => state.employee);

  // Fetch employees when the component mounts
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch])

  // Update employee details and refresh state
  const handleUpdate = async (editedEmployee) => {
    dispatch(updateEmployee({ id: editedEmployee._id, editedEmployee }))
    if (updateResult) {
      if (updateResult.statusCode === 200) {
        alert(updateResult.message);
      }
    }
  }

  // Create employee details and refresh state
  const handleDelete = async (id) =>
    dispatch(deleteEmployee(id))


  // Retry fetching employees
  const retryFetch = () =>
    dispatch(fetchEmployees());

  // Display a loading spinner while fetching data
  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Display an error message if fetching fails
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-red-600 bg-red-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Error</h3>
          <p>{error}</p>
          <button
            onClick={retryFetch}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Display the employee list when data is available
  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
        Employee List
      </h2>
      {data.users && data.users.length > 0 ? (
        <EmployeeRecords
          employees={data.users}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          setEditMode={setEditMode}
          editMode={editMode}
        />
      ) : (
        <div className="text-center text-gray-500">
          <p>No employees found.</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
=======
"use client"; // Mark this file as a client-side component

import React, { useEffect, useState } from "react";
import { fetchEmployees, updateEmployee } from "../../../utils/api"; // Import API functions
import GridView from "./GridView"; // Import GridView component

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]); // State for employees data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch employees when the component mounts
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const data = await fetchEmployees(); // Fetch employee data from API
        setEmployees(data); // Set fetched data to state
        setError(null); // Clear error state
      } catch (err) {
        console.error("Failed to fetch employees:", err); // Log the error for debugging
        setError("Failed to fetch employees. Please try again later.");
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchEmployeeData(); // Call the fetch function
  }, []); // Dependency array ensures the effect runs only once

  // Update employee details and refresh state
  const handleUpdate = async (updatedEmployee) => {
    try {
      const updatedData = await updateEmployee(
        updatedEmployee._id,
        updatedEmployee
      ); // API call
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp._id === updatedData._id ? updatedData : emp
        )
      );
    } catch (err) {
      console.error("Failed to update employee:", err); // Log the error
      setError("Failed to update employee. Please try again.");
    }
  };

  // Retry fetching employees
  const retryFetch = () => {
    setLoading(true);
    setError(null);
    fetchEmployeeData();
  };

  // Display a loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Display an error message if fetching fails
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-red-600 bg-red-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Error</h3>
          <p>{error}</p>
          <button
            onClick={retryFetch}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Display the employee list when data is available
  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
        Employee List
      </h2>
      {employees.length > 0 ? (
        <GridView employees={employees} onUpdate={handleUpdate} /> // Render GridView with employees data
      ) : (
        <div className="text-center text-gray-500">
          <p>No employees found.</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
>>>>>>> cf32ca5666d4a905c419013e5ca8adffb28eee7c
