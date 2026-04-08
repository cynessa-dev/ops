
'use client';

import { forwardRef } from "react";
import Table, { ColumnConfig } from "@/components/ui/Table";

export default forwardRef<HTMLFormElement, {}>(function GoodsEntryForm(props, ref) {
    const columns: ColumnConfig[] = [
        {
            key: "goodsName",
            label: "Goods Name",
            type: "text",
            placeholder: "e.g. Screws",
        },
        {
            key: "quantity",
            label: "Quantity",
            type: "number",
            min: 0,
            max: 9999,
        },
        {
            key: "unit",
            label: "Unit",
            type: "select",
            options: [
                { value: "pcs", label: "pcs" },
                { value: "set", label: "set" },
                { value: "pair", label: "pair" },
                { value: "box", label: "box" },
            ],
        },
        {
            key: "remarks",
            label: "Remarks",
            type: "text",
            placeholder: "Optional notes...",
        },
    ];

    const handleSubmit = (items: Record<string, unknown>[]) => {
        console.log("Submitted items:", items);
        // Add your submission logic here
    };

    return <Table ref={ref} columns={columns} title="Goods Entry Form" onSubmit={handleSubmit} removeMargins={true} showSubmitButton={false} />;
});