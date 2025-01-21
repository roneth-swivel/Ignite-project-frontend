import Link from "next/link";

export default function HomePage() {
  // Using Redux state (if needed, e.g., for employee data or UI settings)
  // const employees = useSelector((state) => state.employee.employees);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Employee Management System
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Manage your employees with ease. Choose an action below:
        </p>
        <div className="space-y-6">
          <Link
            href="/employee/list"
            className="block text-center bg-purple-600 text-white py-3 px-6 rounded-xl text-lg font-medium shadow-lg transition-all hover:bg-purple-700 hover:scale-105 transform"
          >
            Go to Employee List{" "}
            {/* {employees.length > 0 && `(${employees.length})`} */}
          </Link>
          <Link
            href="/employee/add"
            className="block text-center bg-green-600 text-white py-3 px-6 rounded-xl text-lg font-medium shadow-lg transition-all hover:bg-green-700 hover:scale-105 transform"
          >
            Add New Employee
          </Link>
        </div>
      </div>
    </div>
  );
}
