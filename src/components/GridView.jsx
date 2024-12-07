import EmployeeActions from './EmployeeActions';

const employees = [
  { id: 1, name: 'David Miller', email: 'david@grr.la', phone: '+94778899912', gender: 'Male', avatar: '/images/male1.jpg' },
  { id: 2, name: 'Casy Miller', email: 'casy@grr.la', phone: '+94776612222', gender: 'Female', avatar: '/images/female1.jpg' },
];

const GridView = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {employees.map((employee) => (
        <div key={employee.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="h-32 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{employee.name}</h3>
            <p className="text-sm text-gray-500">{employee.email}</p>
            <p className="text-sm text-gray-500">{employee.phone}</p>
            <p className="text-sm text-gray-500">{employee.gender}</p>
          </div>
          <EmployeeActions employeeId={employee.id} />
        </div>
      ))}
    </div>
  );
};

export default GridView;
