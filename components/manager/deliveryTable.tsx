'use client';

import { useState, useEffect } from "react";

interface DeliveryItem {
    quantity: number;
    unit: string;
    description: string;
    remarks?: string;
}

export default function DeliveryTable() {
    const [items, setItems] = useState<DeliveryItem[]>([]);

    function addItem() {
        const newItem: DeliveryItem = {
            quantity: 0,
            unit: "",
            description: "",
            remarks: ""
        }

        setItems([...items, newItem]); // Add the new item to the existing items array
    }
    
    function updateDescription(index: number, value: string) {
        const updatedItems = [...items];
        updatedItems[index].description = value;

        setItems(updatedItems); // Update the state with the modified items array
    }

    function updateRemarks(index: number, value: string) {
        const updatedItems = [...items];
        updatedItems[index].remarks = value;

        setItems(updatedItems); // Update the state with the modified items array
    }

    function updateUnit(index: number, value: string) {
        const updatedItems = [...items];
        updatedItems[index].unit = value;

        setItems(updatedItems); // Update the state with the modified items array
    }

    function updateQuantity(index: number, value: number) {
        const updatedItems = [...items];
        updatedItems[index].quantity = value;

        setItems(updatedItems); // Update the state with the modified items array
    }

    useEffect(() => {
        addItem(); // Add an initial item when the component mounts
    }, []);

    return (
        <div>
            <form action="#" method="post">
                <table className="border border-(--border) border-collapse">
                    <thead>
                        <tr>
                            <th>QTY</th>
                            <th>UNIT</th>
                            <th>DESCRIPTION</th>
                            <th>REMARKS</th>
                        </tr>
                    </thead>
                    <tbody>
                        { items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <input 
                                        type="number"
                                        value={item.quantity}
                                        onChange={e =>
                                            updateQuantity(index, parseInt(e.target.value, 10) || 0)
                                        }
                                        className="w-12 text-center"
                                    />
                                </td>
                                <td>
                                    <select 
                                        value={item.unit} 
                                        onChange={e => updateUnit(index, e.target.value)}
                                        className="w-24 text-center"
                                    >
                                        <option value="">Select unit</option>
                                        <option value="pcs">pcs</option>
                                        <option value="set">set</option>
                                        <option value="pair">pair</option>
                                    </select>
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        value={item.description}
                                        onChange={e => {
                                            updateDescription(index, e.target.value);
                                        }}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        value={item.remarks}
                                        onChange={e => {
                                            updateRemarks(index, e.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" className="mt-4 px-4 py-2 bg-(--primary-action) font-bold rounded cursor-pointer hover:bg-(--primary-hover)" onClick={ addItem }>
                    +
                </button>
            </form>
        </div>
    );
}