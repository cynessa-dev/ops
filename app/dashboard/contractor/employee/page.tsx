import Navigation from "@/components/ui/Navigation";
import RecentSubmissions from "@/components/dashboard/contractor/employee/RecentSubmissions";
import RecordInAndOut from "@/components/dashboard/contractor/employee/ActionCenter";
import SummaryBoard from "@/components/dashboard/contractor/employee/SummaryBoard";

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