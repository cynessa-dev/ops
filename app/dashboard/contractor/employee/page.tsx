import Navigation from "@/components/ui/Navigation";
import RecentSubmissions from "@/components/dashboard/contractor/employee/RecentSubmissions";
import RecordInAndOut from "@/components/dashboard/contractor/employee/ActionCenter";
import SummaryBoard from "@/components/dashboard/contractor/employee/SummaryBoard";

export default function Manager() {
    return(
        <main>
            <Navigation />
            <SummaryBoard 
                statCardData={[
                    { title: "My Submissions", data: "0", icon: "upload_file" },
                    { title: "Approved", data: "0", icon: "check" },
                    { title: "Pending", data: "0", icon: "schedule" },
                    { title: "This Week", data: "0", icon: "bar_chart" }
                ]}
            />
            <RecordInAndOut />
            <RecentSubmissions />
        </main>
    );
}