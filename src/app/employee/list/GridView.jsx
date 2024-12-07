import React from "react";

const GridView = ({ employees }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {employees.map((employee) => (
        <div
          key={employee._id}
          className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
        >
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
        </div>
      ))}
    </div>
  );
};

export default GridView;
