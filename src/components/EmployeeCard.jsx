const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="card">
      <h3>{employee.firstName} {employee.lastName}</h3>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phoneNumber}</p>
      <p>Gender: {employee.gender === "M" ? "Male" : "Female"}</p>
      <button onClick={() => onDelete(employee._id)}>Delete</button>
    </div>
  );
};

export default EmployeeCard;
