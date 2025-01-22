
export default function GridView(
    {
        sortedEmployees,
        handleEdit = () => { },
        handleDelete = () => { }
    }) {
    return (
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
                            <strong>Phone:</strong> {employee.phoneNumber}
                        </p>
                        <p className="text-gray-700">
                            <strong>Gender:</strong> {employee.gender}
                        </p>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <button
                            onClick={() => handleEdit(employee)}
                            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(employee._id)}
                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
