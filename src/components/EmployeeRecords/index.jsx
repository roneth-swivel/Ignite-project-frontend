import React, { useState } from "react";
import EditForm from '../EditForm';
import GridFilters from './GridFilters';
import GridView from './GridView';
import TableView from './TableView';

const EmployeeRecords = ({
    employees = [],
    onUpdate = () => { },
    onDelete = () => { },
    setEditMode = () => { },
    editMode,
}) => {

    // Below use states will handle employee list related states
    const [isGridView, setIsGridView] = useState(true);
    const [sortedEmployees, setSortedEmployees] = useState([...employees]);
    const [editingEmployee, setEditingEmployee] = useState(null);

    // Reset sortedEmployees when employees prop changes
    React.useEffect(() => {
        setSortedEmployees([...employees]);
    }, [employees]);

    // Sorting function
    const handleSort = (type, order) => {
        const sorted = [...sortedEmployees].sort((a, b) => {
            if (type === "name") {
                const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
                const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
                return order === "asc"
                    ? nameA.localeCompare(nameB)
                    : nameB.localeCompare(nameA);
            }
            return 0;
        });
        setSortedEmployees(sorted);
    };

    // Render empty state if no employees
    if (sortedEmployees.length === 0) {
        return (
            <div className="container mx-auto p-4 text-center text-gray-500">
                No employees found
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            {editMode ? (
                <EditForm
                    editingEmployee={editingEmployee}
                    onUpdate={onUpdate}
                    setEditMode={setEditMode}
                    setEditingEmployee={setEditingEmployee}
                />
            ) : (
                <>
                    <GridFilters
                        isGridView={isGridView}
                        handleSort={handleSort}
                        setIsGridView={setIsGridView}
                    />
                    {isGridView ? (
                        <GridView
                            sortedEmployees={sortedEmployees}
                            handleEdit={(employee) => {
                                setEditMode(!editMode);
                                setEditingEmployee(employee)
                            }}
                            handleDelete={onDelete}
                        />
                    ) : (
                        <TableView
                            sortedEmployees={sortedEmployees}
                            handleEdit={(employee) => {
                                setEditMode(!editMode);
                                setEditingEmployee(employee)
                            }}
                            handleDelete={onDelete}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default EmployeeRecords;
