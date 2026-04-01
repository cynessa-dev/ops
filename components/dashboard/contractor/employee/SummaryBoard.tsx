import Greet from "@/components/dashboard/contractor/employee/Greet";
import StatCard from "@/components/ui/StatCard"

export default function SummaryBoard() {
    return (
        <section className="px-8">
            {/* GREETINGS */}
            <Greet name="Chano" />

            {/* SUMMARY CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <StatCard title="My Submissions" data="0" icon="upload_file" />
                <StatCard title="Approved" data="0" icon="check" />
                <StatCard title="Pending" data="0" icon="schedule" />
                <StatCard title="This Week" data="0" icon="bar_chart" />
            </div>
        </section>
    );
}