import Link from 'next/link';

const AddEmployeeButton = () => (
  <Link
    href="/employee/add"
    className="fixed bottom-6 right-6 bg-purple-700 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition"
  >
    <i className="fas fa-plus"></i> Add Employee
  </Link>
);

export default AddEmployeeButton;
