type ButtonProps = {
    type?: 'submit' | 'button';
    label: string;
    action?: (...args: any[]) => any | undefined;
};

export default function Button({ 
    type = 'button', 
    label, 
    action 
}: ButtonProps) {

    return (
        <button
            type={ type }
            onClick={ action }
            className="
                mt-4 
                px-6 
                py-3 
                w-full 
                bg-primary-action 
                font-semibold 
                rounded-md 
                shadow-lg 
                shadow-primary-action/30 
                cursor-pointer 
                transition-color 
                duration-150 
                ease-in-out 
                active:translate-y-0 
                active:rotate-0 
                hover:bg-primary-hover 
                hover:shadow-xl
            "
        >
            { label }
        </button>
    );
}
