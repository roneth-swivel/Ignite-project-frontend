export default function TableView({ employees }) {
  return (
    <table className="table-auto border-collapse border border-gray-200 w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Image</th>
          <th className="border px-4 py-2">First Name</th>
          <th className="border px-4 py-2">Last Name</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Phone</th>
          <th className="border px-4 py-2">Gender</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td className="border px-4 py-2">
              <img src={employee.image} alt={employee.firstName} className="w-10 h-10 rounded-full" />
            </td>
            <td className="border px-4 py-2">{employee.firstName}</td>
            <td className="border px-4 py-2">{employee.lastName}</td>
            <td className="border px-4 py-2">{employee.email}</td>
            <td className="border px-4 py-2">{employee.phone}</td>
            <td className="border px-4 py-2">{employee.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
