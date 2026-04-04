'use client';

import useSlideOver from "@/lib/hooks/useSlideOver";
import ActionCenter from "@/components/dashboard/contractor/employee/ActionCenter";
import Navigation from "@/components/ui/Navigation";
import SlideOver from "@/components/ui/SlideOver";
import SummaryBoard from "@/components/dashboard/contractor/employee/SummaryBoard";
import Table from "@/components/dashboard/contractor/employee/Table";

export default function Manager() {
    const { isOpen, open, close } = useSlideOver();

    return(
        <main>
            <Navigation name="Chano" />
            <SummaryBoard 
                statCardData={[
                    { title: "My Submissions", data: "0", icon: "upload_file" },
                    { title: "Approved", data: "0", icon: "check" },
                    { title: "Pending", data: "0", icon: "schedule" },
                    { title: "This Week", data: "0", icon: "bar_chart" }
                ]}
            />
            <ActionCenter onOpen={ open } />
            <Table
                title="My Recent Submissions"
                icon="assignment"
                headers={["REF", "TYPE", "GOODS", "QTY", "DATE", "STATUS"]}
                rows={[
                    ["123456", "Purchase Order", "Office Supplies", "10", "2024-06-01", "Approved"],
                    ["123456", "Purchase Order", "Office Supplies", "10", "2024-06-01", "Approved"],
                    ["123456", "Purchase Order", "Office Supplies", "10", "2024-06-01", "Approved"]
                ]}
            />
            <SlideOver isOpen={ isOpen } onClose={ close } />
        </main>
    );
}