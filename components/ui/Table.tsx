
'use client';

import { useState } from "react";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import QuantitySpinner from "@/components/ui/QuantitySpinner";
import Select from "./Select";

export interface ColumnConfig {
    key: string;
    label: string;
    type: "text" | "number" | "select" | "email" | "date";
    placeholder?: string;
    options?: { value: string; label: string }[]; // For select type
    min?: number;
    max?: number;
}

type TableFormRow = Record<string, string | number>;

interface TableProps {
    title?: string;
    icon?: string;
    // Display mode
    headers?: string[];
    rows?: string[][];
    // Form mode
    columns?: ColumnConfig[];
    onSubmit?: (items: TableFormRow[]) => void;
    showSubmitButton?: boolean;
}

export default function Table({ title, icon, headers, rows, columns, onSubmit, showSubmitButton = true }: TableProps) {
    const isForm = !!columns;

    const [items, setItems] = useState<TableFormRow[]>(isForm ? [createEmptyRow()] : []);

    function createEmptyRow(): TableFormRow {
        const row: TableFormRow = {};
        columns!.forEach((col) => {
            row[col.key] = col.type === "number" ? 0 : "";
        });
        return row;
    }

    function addItem() {
        setItems([...items, createEmptyRow()]);
    }

    function updateField(index: number, key: string, value: string | number) {
        const updatedItems = [...items];
        updatedItems[index][key] = value;
        setItems(updatedItems);
    }

    function removeItem(index: number) {
        if (items.length > 1) {
            setItems(items.filter((_, i) => i !== index));
        }
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(items);
        }
    };

    const displayHeaders = isForm ? columns!.map(col => col.label) : headers!;
    const displayRows = isForm ? items.map(item => columns!.map(col => String(item[col.key]))) : rows!;

    return (
        <section className="mt-12 mx-8">
            { title && (
                <div className="flex items-center gap-2 mb-4 text-[1.125rem] font-semibold">
                    { icon && (
                        <span className="material-symbols-rounded">
                            { icon }
                        </span>
                    ) }
                    <h2>{ title }</h2>
                </div>
            ) }
            <div className="border border-border rounded-xl overflow-x-auto ">
                {isForm ? (
                    <form onSubmit={ handleSubmit }>
                        <table className="w-full">
                            <thead>
                                <tr className="text-left uppercase border-b border-border">
                                    {columns!.map((col) => (
                                        <th key={col.key} className="px-4 py-3 font-semibold">
                                            { col.label }
                                        </th>
                                    ))}
                                    <th className="px-4 py-3 font-semibold" />
                                </tr>
                            </thead>

                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={ index } className="border-b border-border">
                                        {columns!.map((col) => (
                                            <td key={`${ index } - ${ col.key }`} className="p-2">
                                                {col.type === "select" ? (
                                                    <Select 
                                                        value={ item[col.key] as string }
                                                        onChange={ (value) => updateField(index, col.key, value) }
                                                        options={ col.options || [] }
                                                    />
                                                ) : col.key === "quantity" ? (
                                                    <QuantitySpinner
                                                        value={item[col.key] as number}
                                                        min={col.min}
                                                        max={col.max}
                                                        onChange={(value) => updateField(index, col.key, value)}
                                                    />
                                                ) : (
                                                    <InputField
                                                        type={ col.type }
                                                        value={ item[col.key] }
                                                        placeholder={ col.placeholder }
                                                        onChange={ (e) => updateField(index, col.key, e.target.value) }
                                                    />
                                                )}
                                            </td>
                                        ))}
                                        <td className="p-2 text-center">
                                            <button
                                                type="button"
                                                onClick={ () => removeItem(index) }
                                                disabled={ items.length === 1 }
                                                className="text-danger font-bold cursor-pointer hover:text-danger-hover disabled:text-muted disabled:cursor-not-allowed"
                                            >
                                                &times;
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        <div className="inline-block mt-4 p-8 w-full border border-dashed border-border rounded-lg">
                            <Button type="button" label="+ Add Row" accent="secondary" action={ addItem } />
                        </div>
                        
                        {showSubmitButton && <Button type="submit" label="Submit" />}
                    </form>
                ) : (
                    <table className="w-full">
                        <thead>
                            <tr className="text-left uppercase border-b border-border">
                                {
                                    displayHeaders.map((header, index) => (
                                        <th key={index} className="px-4 py-3 font-semibold">
                                            {header}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayRows.map((row, rowIndex) => (
                                    <tr key={rowIndex} className="border-b border-border transition-colors hover:bg-table-hover">
                                        {
                                            row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="px-4 py-3">
                                                    {cell}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
}