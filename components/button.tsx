'use client';

import { useRouter } from "next/navigation";
import { forwardRef, ReactNode, ComponentPropsWithoutRef } from "react";

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    /** The label shown inside the button */
    text: string;
    /** Visual style variant */
    variant?: "primary" | "secondary" | "tertiary";
    /** Size of the button */
    size?: "sm" | "md" | "lg";
    /** Show a spinner and disable interaction */
    loading?: boolean;
    /** Optional icon to render before the text */
    icon?: ReactNode;
    /** If provided, clicking will navigate to this route */
    destination?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            text,
            variant = "primary",
            size = "md",
            loading = false,
            icon,
            destination,
            disabled,
            ...rest
        },
        ref
    ) => {
        const router = useRouter();

        const baseStyles =
            "inline-flex items-center justify-center font-bold rounded cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

        const variantStyles: Record<string, string> = {
            primary: "bg-(--primary-action) text-foreground dark:text-background hover:bg-(--primary-hover) focus:ring-(--primary-bg)",
            secondary: "bg-(--secondary) text-foreground dark:text-background hover:bg-secondary-dark focus:ring-secondary",
            tertiary: "bg-transparent text-foreground dark:text-background hover:bg-primary-light focus:ring-primary",
        };

        const sizeStyles: Record<string, string> = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
        };

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (loading || disabled) {
                e.preventDefault();
                return;
            }
            if (destination) {
                router.push(destination);
            }
            if (rest.onClick) {
                rest.onClick(e);
            }
        };

        return (
            <button
                ref={ref}
                type={rest.type ?? "button"}
                className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
                onClick={handleClick}
                disabled={disabled || loading}
                {...rest}
            >
                {loading && (
                    <svg
                        className="animate-spin mr-2 h-5 w-5 text-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                        ></path>
                    </svg>
                )}
                {icon && !loading && <span className="mr-2">{icon}</span>}
                {text}
            </button>
        );
    }
);

export default Button;
