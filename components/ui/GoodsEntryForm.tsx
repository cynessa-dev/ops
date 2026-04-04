
'use client';

import TableForm, { ColumnConfig } from "@/components/ui/TableForm";

export default function GoodsEntryForm() {
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

    return <TableForm columns={columns} title="Goods Entry Form" onSubmit={handleSubmit} />;
}