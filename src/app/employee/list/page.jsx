"use client"; // Mark this file as a client-side component

import React, { useEffect, useState } from "react";
import { fetchEmployees } from "../../../utils/api"; // Import API function to fetch employees
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
        </div>
      </div>
    );
  }

  // Display the employee list when data is available
  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Employee List</h2>
      {employees.length > 0 ? (
        <GridView employees={employees} /> // Render GridView with employees data
      ) : (
        <div className="text-center text-gray-500">
          <p>No employees found.</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
