import { deleteEmployee } from "@/utils/api";
import React, { useState } from "react";

const EmployeeList = ({
  employees = [],
  onUpdate = () => Promise.resolve(),
}) => {
  const [isGridView, setIsGridView] = useState(true);
  const [sortedEmployees, setSortedEmployees] = useState([...employees]);

  // Reset sortedEmployees when employees prop changes
  React.useEffect(() => {
    setSortedEmployees([...employees]);
  }, [employees]);

  const [editMode, setEditMode] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Sorting function
  const handleSort = (type, order) => {
    const sorted = [...sortedEmployees].sort((a, b) => {
      if (type === "name") {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
        return order === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      }
      return 0;
    });
    setSortedEmployees(sorted);
  };

  // Edit functionality
  const handleEdit = (employee) => {
    setEditingEmployee({ ...employee });
    setEditMode(true);
  };

  // Update functionality
  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(editingEmployee)
      .then(() => {
        const updatedList = sortedEmployees.map((emp) =>
          emp._id === editingEmployee._id ? editingEmployee : emp
        );
        setSortedEmployees(updatedList);
        setEditMode(false);
        alert("Employee updated successfully.");
      })
      .catch((err) => {
        console.error("Failed to update employee:", err);
        alert("Failed to update employee. Please try again.");
      });
  };

  // Delete functionality
  const handleDelete = async (employeeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (!confirmDelete) return;

    try {
      const response = await deleteEmployee(employeeId);
      if (response) {
        alert("Employee deleted successfully.");
        location.reload();
      }
    } catch (error) {
      console.error("Failed to delete employee:", error);
      alert("Failed to delete employee. Please try again.");
    }
  };

  // Render empty state if no employees
  if (sortedEmployees.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center text-gray-500">
        No employees found
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {editMode ? (
        <div className="p-4 border rounded-lg shadow-md bg-gray-100">
          <h2 className="text-xl font-semibold mb-4">Edit Employee</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                value={editingEmployee.firstName || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    firstName: e.target.value,
                  })
                }
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                value={editingEmployee.lastName || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    lastName: e.target.value,
                  })
                }
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                value={editingEmployee.email || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    email: e.target.value,
                  })
                }
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                value={editingEmployee.phoneNumber || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    phoneNumber: e.target.value,
                  })
                }
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Gender</label>
              <select
                value={editingEmployee.gender || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    gender: e.target.value,
                  })
                }
                className="w-full border px-2 py-1 rounded"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-4">
            <div>
              <button
                onClick={() => handleSort("name", "asc")}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition mr-2"
              >
                Sort by Name (A-Z)
              </button>
              <button
                onClick={() => handleSort("name", "desc")}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition mr-2"
              >
                Sort by Name (Z-A)
              </button>
            </div>
            <button
              onClick={() => setIsGridView((prev) => !prev)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              {isGridView ? "Switch to Table View" : "Switch to Grid View"}
            </button>
          </div>
          {isGridView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedEmployees.map((employee) => (
                <div
                  key={employee._id}
                  className="p-4 border rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold">
                      {employee.firstName} {employee.lastName}
                    </h3>
                    <p className="text-gray-700">
                      <strong>Email:</strong> {employee.email}
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> {employee.phoneNumber}
                    </p>
                    <p className="text-gray-700">
                      <strong>Gender:</strong> {employee.gender}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => handleEdit(employee)}
                      className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(employee._id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    First Name
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Last Name
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Email
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Phone
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Gender
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedEmployees.map((employee) => (
                  <tr key={employee._id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">
                      {employee.firstName}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {employee.lastName}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {employee.email}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {employee.phoneNumber}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {employee.gender}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <button
                        onClick={() => handleEdit(employee)}
                        className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(employee._id)}
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default EmployeeList;
