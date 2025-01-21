import React, { useState, useEffect } from "react";

const EditEmployeeForm = ({ employeeId, onUpdate }) => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    avatar: "",
  });

  useEffect(() => {
    // Fetch employee details using the `employeeId` (mock data for now)
    const fetchEmployee = async () => {
      // Replace this with an actual API call
      const mockEmployee = {
        id: employeeId,
        name: "John Doe",
        email: "john@grr.la",
        phone: "+94778899911",
        gender: "Male",
        avatar: "/images/male1.jpg",
      };
      setEmployee(mockEmployee);
    };
    fetchEmployee();
  }, [employeeId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Employee:", employee);
    onUpdate(employee); // Callback to update the list or perform further actions
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="text"
          name="phone"
          value={employee.phone}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Gender</label>
        <select
          name="gender"
          value={employee.gender}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditEmployeeForm;
