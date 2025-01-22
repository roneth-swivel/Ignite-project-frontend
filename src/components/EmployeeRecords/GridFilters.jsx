
export default function GridFilters(
    {
        handleSort = () => { },
        setIsGridView = () => { },
        isGridView
    }
) {
    return (
        <div className="flex justify-between mb-4">
            <div>
                <button
                    onClick={() => handleSort("name", "asc")}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition mr-2"
                >
                    Sort by Name (A-Z)
                </button>
                <button
                    onClick={() => handleSort("name", "desc")}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition mr-2"
                >
                    Sort by Name (Z-A)
                </button>
            </div>
            <button
                onClick={() => setIsGridView((prev) => !prev)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                {isGridView ? "Switch to Table View" : "Switch to Grid View"}
            </button>
        </div>
    );
}
