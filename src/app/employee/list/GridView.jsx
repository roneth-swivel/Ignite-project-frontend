import React, { useState } from "react";

const EmployeeList = ({ employees }) => {
  const [isGridView, setIsGridView] = useState(true);
  const [sortedEmployees, setSortedEmployees] = useState([...employees]);

  const handleSort = (type, order) => {
    const sorted = [...sortedEmployees].sort((a, b) => {
      if (type === "name") {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
        return order === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      }
      if (type === "date") {
        const dateA = new Date(a.dateTime);
        const dateB = new Date(b.dateTime);
        return order === "asc" ? dateA - dateB : dateB - dateA;
      }
      return 0;
    });
    setSortedEmployees(sorted);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Layout and Sort Controls */}
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
          <button
            onClick={() => handleSort("date", "asc")}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition mr-2"
          >
            Sort by Date (Oldest)
          </button>
          <button
            onClick={() => handleSort("date", "desc")}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            Sort by Date (Newest)
          </button>
        </div>
        <button
          onClick={() => setIsGridView((prev) => !prev)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {isGridView ? "Switch to Table View" : "Switch to Grid View"}
        </button>
      </div>

      {/* Layout display */}
      {isGridView ? (
        // Grid View
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
                  <strong>Phone:</strong> {employee.phone}
                </p>
                <p className="text-gray-700">
                  <strong>Gender:</strong> {employee.gender}
                </p>
                <p className="text-gray-700">
                  <strong>Date:</strong>{" "}
                  {new Date(employee.dateTime).toLocaleString()}
                </p>
              </div>
              <div className="mt-4">
                <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Table View
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
                Date
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left">
                Action
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
                  {employee.phone}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {employee.gender}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {new Date(employee.dateTime).toLocaleString()}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
