
export default function RecentSubmissions() {
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
                            <th className="px-4 py-3 font-semibold">REF</th>
                            <th className="px-4 py-3 font-semibold">TYPE</th>
                            <th className="px-4 py-3 font-semibold">GOODS</th>
                            <th className="px-4 py-3 font-semibold">QTY</th>
                            <th className="px-4 py-3 font-semibold">DATE</th>
                            <th className="px-4 py-3 font-semibold">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-border transition-colors hover:bg-table-hover">
                            <td className="px-4 py-3">123456</td>
                            <td className="px-4 py-3">Purchase Order</td>
                            <td className="px-4 py-3">Office Supplies</td>
                            <td className="px-4 py-3">10</td>
                            <td className="px-4 py-3">2024-06-01</td>
                            <td className="px-4 py-3 font-bold">Approved</td>
                        </tr>
                        <tr className="border-b border-border transition-colors hover:bg-table-hover">
                            <td className="px-4 py-3">123456</td>
                            <td className="px-4 py-3">Purchase Order</td>
                            <td className="px-4 py-3">Office Supplies</td>
                            <td className="px-4 py-3">10</td>
                            <td className="px-4 py-3">2024-06-01</td>
                            <td className="px-4 py-3 font-bold">Approved</td>
                        </tr>
                        <tr className="border-b border-border transition-colors hover:bg-table-hover">
                            <td className="px-4 py-3">123456</td>
                            <td className="px-4 py-3">Purchase Order</td>
                            <td className="px-4 py-3">Office Supplies</td>
                            <td className="px-4 py-3">10</td>
                            <td className="px-4 py-3">2024-06-01</td>
                            <td className="px-4 py-3 font-bold">Approved</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}