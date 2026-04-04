type ButtonProps = {
    type?: 'submit' | 'button';
    label: string;
    accent?: 'primary' | 'danger';
    action?: () => void;
};

export default function Button({ 
    type = 'button',
    label,
    accent = 'primary',
    action
}: ButtonProps) {

    return (
        <button
            type={ type }
            onClick={ action }
            className={`
                mt-4 
                px-6 
                py-3 
                w-full 
                ${ accent === 'primary' ? 'bg-primary-action' : 'bg-danger' }
                font-semibold 
                rounded-md 
                shadow-lg 
                ${ accent === 'primary' ? 'shadow-primary-action/30' : 'shadow-danger/30' }
                cursor-pointer 
                transition-color 
                duration-150 
                ease-in-out 
                active:translate-y-0 
                active:rotate-0 
                ${ accent === 'primary' ? 'hover:bg-primary-hover' : 'hover:bg-danger-hover' }
                hover:shadow-xl
            `}
        >
            { label }
        </button>
    );
}
