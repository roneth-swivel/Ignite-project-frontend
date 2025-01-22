
export default function EditForm(
    {
        onUpdate = () => { },
        setEditMode = () => { },
        setEditingEmployee = () => { },
        editingEmployee
    }
) {
    return (
        <div className="p-4 border rounded-lg shadow-md bg-gray-100">
            <h2 className="text-xl font-semibold mb-4">Edit Employee</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-1">First Name</label>
                    <input
                        type="text"
                        value={editingEmployee.firstName || ""}
                        onChange={(e) =>
                            setEditingEmployee({
                                ...editingEmployee,
                                firstName: e.target.value,
                            })
                        }
                        className="w-full border px-2 py-1 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Last Name</label>
                    <input
                        type="text"
                        value={editingEmployee.lastName || ""}
                        onChange={(e) =>
                            setEditingEmployee({
                                ...editingEmployee,
                                lastName: e.target.value,
                            })
                        }
                        className="w-full border px-2 py-1 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        value={editingEmployee.email || ""}
                        onChange={(e) =>
                            setEditingEmployee({
                                ...editingEmployee,
                                email: e.target.value,
                            })
                        }
                        className="w-full border px-2 py-1 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Phone</label>
                    <input
                        type="text"
                        value={editingEmployee.phoneNumber || ""}
                        onChange={(e) =>
                            setEditingEmployee({
                                ...editingEmployee,
                                phoneNumber: e.target.value,
                            })
                        }
                        className="w-full border px-2 py-1 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Gender</label>
                    <select
                        value={editingEmployee.gender || ""}
                        onChange={(e) =>
                            setEditingEmployee({
                                ...editingEmployee,
                                gender: e.target.value,
                            })
                        }
                        className="w-full border px-2 py-1 rounded"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => setEditMode(false)}
                        className="px-4 py-2 bg-gray-500 text-white rounded mr-2 hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => onUpdate(editingEmployee)}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
