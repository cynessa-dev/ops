import Greet from "@/components/dashboard/contractor/employee/Greet";
import StatCard from "@/components/ui/StatCard"

type SummaryProps = {
    statCardData: {
        title: string;
        data: string;
        icon: 'bar_chart' | 'check' | 'schedule' | 'upload_file';
    }[];
}

export default function SummaryBoard({ statCardData }: SummaryProps) {
    return (
        <section className="px-8">
            {/* GREETINGS */}
            <Greet name="Chano" />

            {/* SUMMARY CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                { statCardData.map((card, index) => (
                    <StatCard key={index} title={card.title} data={card.data} icon={card.icon} />
                )) }
            </div>
        </section>
    );
}