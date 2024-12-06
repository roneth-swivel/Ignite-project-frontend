const EmployeeActions = ({ employeeId }) => {
  const handleEdit = () => {
    console.log(`Edit employee ${employeeId}`);
  };

  const handleDelete = () => {
    console.log(`Delete employee ${employeeId}`);
  };

  return (
    <div className="flex justify-around p-2 bg-gray-100">
      <button
        onClick={handleEdit}
        className="text-green-500 hover:text-green-600 transition"
      >
        <i className="fas fa-edit"></i>
      </button>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-600 transition"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default EmployeeActions;
