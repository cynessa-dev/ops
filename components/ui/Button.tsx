type ButtonProps = {
    type?: 'submit' | 'button';
    label: string;
    accent?: 'primary' | 'secondary' | 'danger';
    action?: () => void;
};

export default function Button({ 
    type = 'button',
    label,
    accent = 'primary',
    action
}: ButtonProps) {

    const accentClasses = {
        primary: {
            bg: 'bg-primary-action',
            shadow: 'shadow-primary-action/30',
            hover: 'hover:bg-primary-hover',
            border: ''
        },
        secondary: {
            bg: 'bg-card',
            shadow: 'shadow-background/30',
            hover: 'hover:bg-border',
            border: 'border border-border'
        },
        danger: {
            bg: 'bg-danger',
            shadow: 'shadow-danger/30',
            hover: 'hover:bg-danger-hover',
            border: ''
        }
    };

    const classes = accentClasses[accent];

    return (
        <button
            type={ type }
            onClick={ action }
            className={` 
                px-6 
                py-3 
                w-full 
                ${classes.bg}
                font-semibold 
                rounded-md 
                shadow-lg 
                ${classes.shadow}
                ${classes.border ?? ''}
                cursor-pointer 
                transition-color 
                duration-150 
                ease-in-out 
                active:translate-y-0 
                active:rotate-0 
                ${classes.hover}
                hover:shadow-xl
            `}
        >
            { label }
        </button>
    );
}
