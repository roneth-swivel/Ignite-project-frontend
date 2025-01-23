"use client"; // Mark this file as a client-side component

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeRecords from "../../../components/EmployeeRecords";
import {
  fetchEmployees,
  updateEmployee,
  deleteEmployee
} from '../../../thunks/employee-thunk';

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
