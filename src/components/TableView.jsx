const TableView = ({ users, onDelete, onEdit }) => {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-md">
      <thead>
        <tr>
          <th className="border px-4 py-2">First Name</th>
          <th className="border px-4 py-2">Last Name</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Phone</th>
          <th className="border px-4 py-2">Gender</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td className="border px-4 py-2">{user.firstName}</td>
            <td className="border px-4 py-2">{user.lastName}</td>
            <td className="border px-4 py-2">{user.email}</td>
            <td className="border px-4 py-2">{user.phoneNumber}</td>
            <td className="border px-4 py-2">
              {user.gender === "M" ? "Male" : "Female"}
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEdit(user._id)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(user._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
