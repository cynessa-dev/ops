
'use client';

import { forwardRef } from "react";
import Table, { ColumnConfig } from "@/components/ui/Table";

type GoodsEntryFormProps = {
    method: "inbound" | "outbound";
    onSubmit?: (items: Record<string, unknown>[], method: "inbound" | "outbound") => void;
    showSubmitButton?: boolean;
};

export default forwardRef<HTMLFormElement, GoodsEntryFormProps>(function GoodsEntryForm({ method, onSubmit, showSubmitButton = true }, ref) {
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
        if (onSubmit) {
            onSubmit(items, method);
        } else {
            console.log("Submitted items:", items, "method:", method);
        }
    };

    return <Table ref={ref} columns={columns} title="Goods Entry Form" onSubmit={handleSubmit} removeMargins={true} showSubmitButton={showSubmitButton} />;
});