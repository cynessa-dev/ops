
type tableData = {
    headers: string[];
    rows: string[][];
}

export default function Table({ headers, rows }: tableData) {
    return (
        <section className="mt-12 mx-8">
            <div className="flex items-center gap-2 mb-4 text-[1.125rem] font-semibold">
                <span className="material-symbols-rounded">assignment</span>
                <h2>My Recent Submissions</h2>
            </div>
            <div className="border border-border rounded-xl overflow-x-auto ">
                <table className="w-full">
                    <thead>
                        <tr className="text-left uppercase border-b border-border">
                            {
                                headers.map((header, index) => (
                                    <th key={index} className="px-4 py-3 font-semibold">
                                        {header}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-b border-border transition-colors hover:bg-table-hover">
                                    {
                                        row.map((cell, cellIndex) => (
                                            <td key={cellIndex} className="px-4 py-3">
                                                {cell}
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}