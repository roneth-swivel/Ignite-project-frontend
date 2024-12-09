import React, { useState, useEffect } from "react";
import EmployeeActions from "./EmployeeActions";
import TableView from "./TableView";

const GridView = () => {
  const [employees, setEmployees] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

  // Simulated data fetch (replace with actual API call)
  useEffect(() => {
    // In a real app, fetch from an API
    const fetchEmployees = async () => {
      try {
        // Replace with actual API endpoint
        const response = await fetch("/api/employees");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Failed to fetch employees", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleEditEmployee = (id) => {
    // Redirect to edit page
    window.location.href = `/api/edit/${id}`;
  };

  const handleDeleteEmployee = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        // Replace with actual delete API endpoint
        await fetch(`/api/user/${id}`, {
          method: "DELETE",
        });

        // Remove employee from local state
        setEmployees(employees.filter((emp) => emp._id !== id));
      } catch (error) {
        console.error("Failed to delete employee", error);
      }
    }
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "table" : "grid");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleViewMode}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Switch to {viewMode === "grid" ? "Table" : "Grid"} View
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <div
              key={employee._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={employee.avatar || "/default-avatar.png"}
                alt={employee.firstName}
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {employee.firstName} {employee.lastName}
                </h3>
                <p className="text-sm text-gray-500">{employee.email}</p>
                <p className="text-sm text-gray-500">{employee.phoneNumber}</p>
                <p className="text-sm text-gray-500">
                  {employee.gender === "M" ? "Male" : "Female"}
                </p>
              </div>
              <EmployeeActions
                employeeId={employee._id}
                onEdit={handleEditEmployee}
                onDelete={handleDeleteEmployee}
              />
            </div>
          ))}
        </div>
      ) : (
        <TableView
          users={employees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
        />
      )}
    </div>
  );
};

export default GridView;
