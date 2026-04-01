import Navigation from "@/components/navigation";
import RecentSubmissions from "@/components/dashboard/contractor/employee/recentSubmissions";
import RecordInAndOut from "@/components/dashboard/contractor/employee/recordInAndOut";
import SummaryBoard from "@/components/dashboard/contractor/employee/summaryBoard";

export default function Manager() {
    return(
        <main>
            <Navigation />
            <SummaryBoard />
            <RecordInAndOut />
            <RecentSubmissions />
        </main>
    );
}