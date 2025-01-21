import React, { useState } from "react";
import GridView from "./list/GridView";
import TableView from "./list/TableView";

const EmployeeViewSwitcher = () => {
  const [isGridView, setIsGridView] = useState(true);

  const employees = [
    {
      id: 1,
      firstName: "David",
      lastName: "Miller",
      email: "david@grr.la",
      phone: "+94778899912",
      gender: "Male",
      image: "/images/male1.jpg",
    },
    {
      id: 2,
      firstName: "Casy",
      lastName: "Miller",
      email: "casy@grr.la",
      phone: "+94776612222",
      gender: "Female",
      image: "/images/female1.jpg",
    },
  ];

  return (
    <div className="p-4">
      {/* Switch Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsGridView((prev) => !prev)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {isGridView ? "Switch to Table View" : "Switch to Grid View"}
        </button>
      </div>

      {/* View Component */}
      {isGridView ? (
        <GridView employees={employees} />
      ) : (
        <TableView employees={employees} />
      )}
    </div>
  );
};

export default EmployeeViewSwitcher;
