
type SelectProps = {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
}

export default function Select({ value, onChange, options }: SelectProps) {
    return (
        <div>
            <select 
                className="w-full min-w-25 px-3 py-2 bg-card border border-border rounded focus:outline-none focus:ring focus:ring-secondary"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={ option.value } value={ option.value }>
                        { option.label }
                    </option>
                ))}
            </select>
        </div>
    );
}