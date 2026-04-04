import Navigation from "@/components/ui/Navigation";
import SummaryBoard from "@/components/dashboard/contractor/employee/SummaryBoard";
import Table from "@/components/dashboard/contractor/employee/Table";

export default function Manager() {
    return(
        <main>
            <Navigation name="Chano" />
            <SummaryBoard 
                statCardData={[
                    { title: "Pending Approval", data: "0", icon: "schedule" },
                    { title: "Total Submissions", data: "0", icon: "check" },
                    { title: "Inbound Today", data: "0", icon: "assignment_returned" },
                    { title: "Outbound Today", data: "0", icon: "assignment_turned_in" }
                ]}
            />
            <Table
                title="Pending Approvals"
                icon="schedule"
                headers={["REF", "TYPE", "GOODS", "QTY", "BY", "DATE", "STATUS", "ACTION"]}
                rows={[
                    ["123456", "Purchase Order", "Office Supplies", "10", "John Doe", "2024-06-01", "Pending", "Approve"],
                    ["123457", "Purchase Order", "Electronics", "5", "Jane Smith", "2024-06-02", "Pending", "Approve"]
                ]}
            />
            <Table
                title="All Goods Flow"
                icon="assignment"
                headers={["REF", "TYPE", "GOODS", "QTY", "BY", "DATE", "STATUS"]}
                rows={[
                    ["123456", "Purchase Order", "Office Supplies", "10", "John Doe", "2024-06-01", "Approved"],
                    ["123457", "Purchase Order", "Electronics", "5", "Jane Smith", "2024-06-02", "Pending"],
                    ["123458", "Purchase Order", "Furniture", "2", "Alice Johnson", "2024-06-03", "Approved"]
                ]}
            />
        </main>
    );
}