
export default function TableView(
    {
        sortedEmployees,
        handleEdit = () => { },
        handleDelete = () => { }
    }
) {
    return (
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
    );
}
