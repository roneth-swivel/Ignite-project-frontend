const EmployeeActions = ({ employeeId, onEdit, onDelete }) => {
  const handleEdit = () => {
    if (onEdit) {
      onEdit(employeeId); // Trigger the custom edit function
    } else {
      console.log(`Edit employee ${employeeId}`);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(employeeId); // Trigger the custom delete function
    } else if (
      window.confirm("Are you sure you want to delete this employee?")
    ) {
      console.log(`Delete employee ${employeeId}`);
    }
  };

  return (
    <div className="flex justify-around p-2 bg-gray-100">
      <button
        onClick={handleEdit}
        className="text-green-500 hover:text-green-600 transition"
        title="Edit Employee"
      >
        <i className="fas fa-edit"></i>
      </button>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-600 transition"
        title="Delete Employee"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default EmployeeActions;
