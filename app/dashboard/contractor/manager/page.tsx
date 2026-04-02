import Navigation from "@/components/ui/Navigation";
import SummaryBoard from "@/components/dashboard/contractor/employee/SummaryBoard";

export default function Manager() {
    return(
        <main>
            <Navigation />
            <SummaryBoard 
                statCardData={[
                    { title: "Pending Approval", data: "0", icon: "schedule" },
                    { title: "Total Submissions", data: "0", icon: "check" },
                    { title: "Inbound Today", data: "0", icon: "assignment_returned" },
                    { title: "Outbound Today", data: "0", icon: "assignment_turned_in" }
                ]}
            />
        </main>
    );
}