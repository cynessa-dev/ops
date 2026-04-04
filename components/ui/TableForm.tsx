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

interface TableFormProps {
    columns: ColumnConfig[];
    title?: string;
    onSubmit?: (items: TableFormRow[]) => void;
}

export default function TableForm({ columns, title, onSubmit }: TableFormProps) {
    const [items, setItems] = useState<TableFormRow[]>([createEmptyRow()]);

    function createEmptyRow(): TableFormRow {
        const row: TableFormRow = {};
        columns.forEach((col) => {
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

    return (
        <div>
            { title && <h2 className="text-2xl font-bold mb-4">{ title }</h2> }
            <form onSubmit={ handleSubmit }>
                <div className="mb-4">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left uppercase border-b border-border">
                                {columns.map((col) => (
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
                                    {columns.map((col) => (
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
                    
                    <Button type="button" label="+ Add Row" action={ addItem } />
                </div>
                
                <Button type="submit" label="Submit" />
            </form>
        </div>
    );
}
