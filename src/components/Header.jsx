import Link from "next/link";

const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 px-8 shadow-lg">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center">
      <h1 className="text-4xl font-extrabold tracking-tight transform transition-transform hover:scale-110">
        Employee Manager
      </h1>
      <nav className="space-x-8">
        <Link href="/" passHref>
          <a className="text-lg font-medium hover:text-gray-200 transition-colors" aria-label="Go to Home page">
            Home
          </a>
        </Link>
        <Link href="/employee/list" passHref>
          <a className="text-lg font-medium hover:text-gray-200 transition-colors" aria-label="View Employee List">
            Employee List
          </a>
        </Link>
        <Link href="/employee/add" passHref>
          <a className="text-lg font-medium hover:text-gray-200 transition-colors" aria-label="Add a new Employee">
            Add Employee
          </a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
