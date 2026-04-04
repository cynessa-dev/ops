import { ChangeEvent } from "react";

type QuantitySpinnerProps = {
    value: number;
    min?: number;
    max?: number;
    onChange: (value: number) => void;
};

export default function QuantitySpinner({ value, min = 0, max = 9999, onChange }: QuantitySpinnerProps) {
    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const nextValue = parseInt(e.target.value, 10);
        onChange(Number.isNaN(nextValue) ? 0 : nextValue);
    }

    return (
        <div className="flex items-center gap-2">
            <button
                type="button"
                onClick={() => onChange(Math.max(min, value - 1))}
                className="w-9 h-9 rounded border border-border bg-background text-lg text-center leading-tight cursor-pointer hover:bg-secondary/10"
            >
                &minus;
            </button>
            <input
                type="number"
                value={value}
                min={min}
                max={max}
                onChange={handleInputChange}
                className="w-20 text-center px-3 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-secondary"
            />
            <button
                type="button"
                onClick={() => onChange(Math.min(max, value + 1))}
                className="w-9 h-9 rounded border border-border bg-background text-lg text-center leading-tight cursor-pointer hover:bg-secondary/10"
            >
                +
            </button>
        </div>
    );
}
