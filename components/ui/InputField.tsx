type InputFieldProps = {
    type: string;
    label?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function InputField({
    label,
    type,
    placeholder,
    value,
    onChange,
}: InputFieldProps) {
    return (
        <div>
            { label && (
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-secondary"
            />
        </div>
    );
}
